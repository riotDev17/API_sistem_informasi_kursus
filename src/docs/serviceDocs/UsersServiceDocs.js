// =========== USERS REGISTER ===========

/**
 * @openapi
 * components:
 *   schemas:
 *     Register User:
 *       type: object
 *       required:
 *         - nama
 *         - username
 *         - email
 *         - password
 *       properties:
 *         nama:
 *           type: string
 *         username:
 *           type: string
 *         email:
 *           type: string
 *         password:
 *           type: string
 *     Register User Success:
 *       type: object
 *       properties:
 *         status:
 *           type: string
 *         message:
 *           type: string
 */

// =========== VERIFY EMAIL ===========

/**
 * @openapi
 * components:
 *   schemas:
 *     Verify Email:
 *       type: object
 *       required:
 *         - email
 *         - otp
 *       properties:
 *         email:
 *           type: string
 *         otp:
 *           type: string
 *     Verify Email Success:
 *       type: object
 *       properties:
 *         status:
 *           type: string
 *         message:
 *           type: string
 *
 *
 */

// =========== USERS LOGIN ===========

/**
 * @openapi
 * components:
 *   schemas:
 *     Login User:
 *       type: object
 *       required:
 *         - username
 *         - password
 *       properties:
 *         username:
 *           type: string
 *         password:
 *           type: string
 *     Login User Success:
 *       type: object
 *       properties:
 *         status:
 *           type: string
 *         message:
 *           type: string
 *
 *
 *
 */

// =========== USERS LOGOUT ===========

/**
 * @openapi
 * components:
 *   schemas:
 *     Logout User Success:
 *       type: object
 *       properties:
 *         status:
 *           type: string
 *         message:
 *           type: string
 *
 */

// =========== USERS GET ===========

/**
 * @openapi
 * components:
 *   schemas:
 *     Get User Success:
 *       type: object
 *       properties:
 *         status:
 *           type: string
 *         message:
 *           type: string
 *         data:
 *           type: object
 *           properties:
 *             id_users:
 *               type: string
 *             nama:
 *               type: string
 *             email:
 *               type: string
 *             username:
 *               type: string
 *             role:
 *               type: string
 *             verifikasi_email:
 *               type: boolean
 *               default: false
 *             tanggal_verifikasi_email:
 *               type: string
 */

// =========== USERS UPDATE ===========

/**
 * @openapi
 * components:
 *   schemas:
 *     Update User:
 *       type: object
 *       required:
 *         - nama
 *         - foto_profil
 *         - tempat_lahir
 *         - tanggal_lahir
 *         - jenis_kelamin
 *         - no_telepon
 *         - alamat
 *         - instagram
 *         - whatsapp
 *       properties:
 *         nama:
 *           type: string
 *         foto_profil:
 *           type: file
 *         tempat_lahir:
 *           type: string
 *         tanggal_lahir:
 *           type: string
 *         jenis_kelamin:
 *           type: string
 *         no_telepon:
 *           type: number
 *         alamat:
 *           type: string
 *         instagram:
 *           type: string
 *         whatsapp:
 *           type: number
 *     Update User Success:
 *       type: object
 *       properties:
 *         status:
 *           type: string
 *         message:
 *           type: string
 *         data:
 *           type: object
 *           properties:
 *             id_users:
 *               type: string
 *             nama:
 *               type: string
 *             email:
 *               type: string
 *             username:
 *               type: string
 *             role:
 *               type: string
 *             foto_profil:
 *               type: string
 *             tempat_lahir:
 *               type: string
 *             tanggal_lahir:
 *               type: string
 *             jenis_kelamin:
 *               type: string
 *             no_telepon:
 *               type: number
 *             alamat:
 *               type: string
 *             instagram:
 *               type: string
 *             whatsapp:
 *               type: number
 *             verifikasi_email:
 *               type: boolean
 *               default: false
 *             tanggal_verifikasi_email:
 *               type: string
 *
 *
 */
