import express from 'express'
import serviceCtrl from '../controllers/service.controller.js'
import authCtrl from '../controllers/auth.controller.js'
const router = express.Router()

router.route('/api/services')
  .get(serviceCtrl.list)
  .post(authCtrl.requireSignin, authCtrl.isAdmin, serviceCtrl.create)

router.param('serviceId', serviceCtrl.serviceByID)

router.route('/api/services/:serviceId')
  .get(serviceCtrl.read)
  .put(authCtrl.requireSignin, authCtrl.isAdmin, serviceCtrl.update)
  .delete(authCtrl.requireSignin, authCtrl.isAdmin, serviceCtrl.remove)

export default router