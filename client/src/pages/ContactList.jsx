import { useEffect, useState } from "react";
import { listItems, updateItem, deleteItem } from "../api/api";
import { useAuth } from "../context/AuthContext";

function ContactList() {
  const { token, isAdmin } = useAuth();
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editValues, setEditValues] = useState({});

  const load = async () => {
    try {
      const data = await listItems("contacts", token);
      if (data.error) setError(data.error);
      else setContacts(data);
    } catch (err) {
      setError("Could not reach the server");
    }
  };

  useEffect(() => {
    if (token) load();
  }, [token]);

  const startEdit = (contact) => {
    setEditingId(contact._id);
    setEditValues(contact);
  };

  const handleEditChange = (e) => {
    setEditValues({ ...editValues, [e.target.name]: e.target.value });
  };

  const saveEdit = async () => {
    const data = await updateItem("contacts", editingId, editValues, token);
    if (data.error) {
      setError(data.error);
    } else {
      setEditingId(null);
      load();
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this contact?")) return;
    const data = await deleteItem("contacts", id, token);
    if (data.error) setError(data.error);
    else load();
  };

  if (!token) {
    return (
      <div>
        <h1>Contact List</h1>
        <p>Please sign in to view contacts.</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Contact List</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}

      {contacts.length === 0 && <p>No contacts yet.</p>}

      {contacts.map((c) => (
        <div className="education-card" key={c._id}>
          {editingId === c._id ? (
            <>
              <input name="firstname" value={editValues.firstname || ""} onChange={handleEditChange} />
              <input name="lastname" value={editValues.lastname || ""} onChange={handleEditChange} />
              <input name="phone" value={editValues.phone || ""} onChange={handleEditChange} />
              <input name="email" value={editValues.email || ""} onChange={handleEditChange} />
              <textarea name="message" value={editValues.message || ""} onChange={handleEditChange} />
              <button onClick={saveEdit}>Save</button>
              <button onClick={() => setEditingId(null)}>Cancel</button>
            </>
          ) : (
            <>
              <h2>{c.firstname} {c.lastname}</h2>
              <p><strong>Email:</strong> {c.email}</p>
              <p><strong>Phone:</strong> {c.phone}</p>
              <p><strong>Message:</strong> {c.message}</p>
              {isAdmin && (
                <>
                  <button onClick={() => startEdit(c)}>Edit</button>
                  <button onClick={() => handleDelete(c._id)}>Delete</button>
                </>
              )}
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default ContactList;