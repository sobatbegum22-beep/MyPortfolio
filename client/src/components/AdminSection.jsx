import { useEffect, useState } from "react";
import { listItems, createItem, updateItem, deleteItem } from "../api/api";
import { useAuth } from "../context/AuthContext";

function AdminSection({ resource, fields, renderItem, cardClass, listClass, addTitle }) {
  const { token, isAdmin } = useAuth();
  const blank = Object.fromEntries(fields.map((f) => [f.name, ""]));

  const [items, setItems] = useState([]);
  const [values, setValues] = useState(blank);
  const [editingId, setEditingId] = useState(null);
  const [error, setError] = useState("");

  const load = async () => {
    try {
      const data = await listItems(resource, token);
      if (data.error) setError(data.error);
      else setItems(data);
    } catch (err) {
      setError("Could not reach the server");
    }
  };

  useEffect(() => {
    load();
  }, [resource]);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const data = editingId
        ? await updateItem(resource, editingId, values, token)
        : await createItem(resource, values, token);
      if (data.error) {
        setError(data.error);
      } else {
        setValues(blank);
        setEditingId(null);
        load();
      }
    } catch (err) {
      setError("Could not reach the server");
    }
  };

  const startEdit = (item) => {
    setEditingId(item._id);
    setValues(Object.fromEntries(fields.map((f) => [f.name, item[f.name] || ""])));
    document.getElementById(`form-${resource}`).scrollIntoView({ behavior: "smooth" });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setValues(blank);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this entry?")) return;
    const data = await deleteItem(resource, id, token);
    if (data.error) setError(data.error);
    else load();
  };

  return (
    <div>
      {/* New entries from the database, same format as the old ones */}
      <div className={listClass}>
        {items.map((item) => (
          <div className={cardClass} key={item._id}>
            {renderItem(item)}
            {isAdmin && (
              <>
                <button onClick={() => startEdit(item)}>Edit</button>
                <button onClick={() => handleDelete(item._id)}>Delete</button>
              </>
            )}
          </div>
        ))}
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Admin-only add box */}
      {isAdmin && (
        <div className="contact-form" id={`form-${resource}`}>
          <h2>{editingId ? "Edit Entry" : addTitle}</h2>
          <form onSubmit={handleSubmit}>
            {fields.map((f) => (
              <div className="form-group" key={f.name}>
                <label htmlFor={`${resource}-${f.name}`}>{f.label}</label>
                {f.textarea ? (
                  <textarea
                    id={`${resource}-${f.name}`}
                    name={f.name}
                    value={values[f.name]}
                    onChange={handleChange}
                  ></textarea>
                ) : (
                  <input
                    type="text"
                    id={`${resource}-${f.name}`}
                    name={f.name}
                    value={values[f.name]}
                    onChange={handleChange}
                    required={f.required}
                  />
                )}
              </div>
            ))}
            <button type="submit" className="submit-button">
              {editingId ? "Save Changes" : "Add"}
            </button>
            {editingId && (
              <button type="button" className="submit-button" onClick={cancelEdit}>
                Cancel
              </button>
            )}
          </form>
        </div>
      )}
    </div>
  );
}

export default AdminSection;