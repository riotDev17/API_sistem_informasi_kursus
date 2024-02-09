// =========== GET SEKOLAH ===========
/**
 * @openapi
 * components:
 *   schemas:
 *     Get Sekolah Success:
 *       type: object
 *       properties:
 *         status:
 *           type: string
 *           description: Status response
 *         message:
 *           type: string
 *           description: Message response
 *         data:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               id_sekolah:
 *                 type: string
 *               npsn:
 *                 type: integer
 *               nama_sekolah:
 *                 type: string
 *               alamat:
 *                 type: string
 *               kode_pos:
 *                 type: integer
 *               provinsi:
 *                 type: object
 *                 properties:
 *                   id_provinsi:
 *                     type: string
 *                   nama_provinsi:
 *                     type: string
 *               kabupaten:
 *                 type: object
 *                 properties:
 *                   id_kabupaten:
 *                     type: string
 *                   nama_kabupaten:
 *                     type: string
 *               kecamatan:
 *                 type: object
 *                 properties:
 *                   id_kecamatan:
 *                     type: string
 *                   nama_kecamatan:
 *                     type: string
 *               kelurahan:
 *                 type: object
 *                 properties:
 *                   id_kelurahan:
 *                     type: string
 *                   nama_kelurahan:
 *                     type: string
 *               status_sekolah:
 *                 type: string
 *               jenjang_pendidikan:
 *                 type: string
 *               akreditas:
 *                 type: string
 *               email_sekolah:
 *                 type: string
 *               no_telepon_sekolah:
 *                 type: string
 *
 *
 */

// =========== CREATE SEKOLAH ===========
/**
 * @openapi
 * components:
 *   schemas:
 *     Create Sekolah:
 *       type: object
 *       properties:
 *         npsn:
 *           type: integer
 *         nama_sekolah:
 *           type: string
 *         alamat:
 *           type: string
 *         kode_pos:
 *           type: integer
 *         provinsi_ID:
 *           type: string
 *         kabupaten_ID:
 *           type: string
 *         kecamatan_ID:
 *           type: string
 *         kelurahan_ID:
 *           type: string
 *         status_sekolah:
 *           type: string
 *         jenjang_pendidikan:
 *           type: string
 *         akreditas:
 *           type: string
 *         email_sekolah:
 *           type: string
 *         no_telepon_sekolah:
 *           type: string
 *     Create Sekolah Success:
 *       type: object
 *       properties:
 *         status:
 *           type: string
 *         message:
 *           type: string
 *         data:
 *           type: object
 *           properties:
 *             id_sekolah:
 *               type: string
 *             npsn:
 *               type: integer
 *             nama_sekolah:
 *               type: string
 *             alamat:
 *               type: string
 *             kode_pos:
 *               type: integer
 *             provinsi:
 *               type: object
 *               properties:
 *                 id_provinsi:
 *                   type: string
 *                 nama_provinsi:
 *                   type: string
 *             kabupaten:
 *               type: object
 *               properties:
 *                 id_kabupaten:
 *                   type: string
 *                 nama_kabupaten:
 *                   type: string
 *             kecamatan:
 *               type: object
 *               properties:
 *                 id_kecamatan:
 *                   type: string
 *                 nama_kecamatan:
 *                   type: string
 *             kelurahan:
 *               type: object
 *               properties:
 *                 id_kelurahan:
 *                   type: string
 *                 nama_kelurahan:
 *                   type: string
 *             status_sekolah:
 *               type: string
 *             jenjang_pendidikan:
 *               type: string
 *             akreditas:
 *               type: string
 *             email_sekolah:
 *               type: string
 *             no_telepon_sekolah:
 *               type: string
 */

// =========== GET SEKOLAH BY ID ===========
/**
 * @openapi
 * components:
 *   schemas:
 *     Get Sekolah By ID Success:
 *       type: object
 *       properties:
 *         status:
 *           type: string
 *         message:
 *           type: string
 *         data:
 *           type: object
 *           properties:
 *             id_sekolah:
 *               type: string
 *             npsn:
 *               type: integer
 *             nama_sekolah:
 *               type: string
 *             alamat:
 *               type: string
 *             kode_pos:
 *               type: integer
 *             provinsi:
 *               type: object
 *               properties:
 *                 id_provinsi:
 *                   type: string
 *                 nama_provinsi:
 *                   type: string
 *             kabupaten:
 *               type: object
 *               properties:
 *                 id_kabupaten:
 *                   type: string
 *                 nama_kabupaten:
 *                   type: string
 *             kecamatan:
 *               type: object
 *               properties:
 *                 id_kecamatan:
 *                   type: string
 *                 nama_kecamatan:
 *                   type: string
 *             kelurahan:
 *               type: object
 *               properties:
 *                 id_kelurahan:
 *                   type: string
 *                 nama_kelurahan:
 *                   type: string
 *             status_sekolah:
 *               type: string
 *             jenjang_pendidikan:
 *               type: string
 *             akreditas:
 *               type: string
 *             email_sekolah:
 *               type: string
 *             no_telepon_sekolah:
 *               type: string
 */

// =========== UPDATE SEKOLAH ===========
/**
 * @openapi
 * components:
 *   schemas:
 *     Update Sekolah:
 *       type: object
 *       properties:
 *         npsn:
 *           type: integer
 *         nama_sekolah:
 *           type: string
 *         alamat:
 *           type: string
 *         kode_pos:
 *           type: integer
 *         provinsi_ID:
 *           type: string
 *         kabupaten_ID:
 *           type: string
 *         kecamatan_ID:
 *           type: string
 *         kelurahan_ID:
 *           type: string
 *         status_sekolah:
 *           type: string
 *         jenjang_pendidikan:
 *           type: string
 *         akreditas:
 *           type: string
 *         email_sekolah:
 *           type: string
 *         no_telepon_sekolah:
 *           type: string
 *     Update Sekolah Success:
 *       type: object
 *       properties:
 *         status:
 *           type: string
 *         message:
 *           type: string
 *         data:
 *           type: object
 *           properties:
 *             id_sekolah:
 *               type: string
 *             npsn:
 *               type: integer
 *             nama_sekolah:
 *               type: string
 *             alamat:
 *               type: string
 *             kode_pos:
 *               type: integer
 *             provinsi:
 *               type: object
 *               properties:
 *                 id_provinsi:
 *                   type: string
 *                 nama_provinsi:
 *                   type: string
 *             kabupaten:
 *               type: object
 *               properties:
 *                 id_kabupaten:
 *                   type: string
 *                 nama_kabupaten:
 *                   type: string
 *             kecamatan:
 *               type: object
 *               properties:
 *                 id_kecamatan:
 *                   type: string
 *                 nama_kecamatan:
 *                   type: string
 *             kelurahan:
 *               type: object
 *               properties:
 *                 id_kelurahan:
 *                   type: string
 *                 nama_kelurahan:
 *                   type: string
 *             status_sekolah:
 *               type: string
 *             jenjang_pendidikan:
 *               type: string
 *             akreditas:
 *               type: string
 *             email_sekolah:
 *               type: string
 *             no_telepon_sekolah:
 *               type: string
 *
 * 
 */


// =========== DELETE SEKOLAH ===========
/**
 * @openapi
 * components:
 *   schemas:
 *     Delete Sekolah Success:
 *       type: object
 *       properties:
 *         status:
 *           type: string
 *         message:
 *           type: string
 *
 * 
 */