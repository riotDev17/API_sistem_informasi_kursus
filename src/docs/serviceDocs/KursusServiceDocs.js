// =========== GET KURSUS ===========
/**
 * @openapi
 * components:
 *   schemas:
 *     Get Kursus Success:
 *       type: object
 *       properties:
 *         status:
 *           type: string
 *         message:
 *           type: string
 *         data:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               id_kursus:
 *                 type: string
 *               nama_kursus:
 *                 type: string
 *               topik_kursus:
 *                 type: string
 *               jenjang_kursus:
 *                 type: string
 *               pengajar:
 *                 type: object
 *                 properties:
 *                   id_pengajar:
 *                     type: string
 *                   nama_pengajar:
 *                     type: string
 *                   no_telepon_pengajar:
 *                     type: string
 *                   gelar_pengajar:
 *                     type: string
 *                   keahlian_pengajar:
 *                     type: string
 *                   pengalaman_pengajar:
 *                     type: string
 *                   biodata_pengajar:
 *                     type: string
 *                   foto_pengajar:
 *                     type: string
 *                   sertifikat_pengajar:
 *                     type: string
 *               jam_mulai:
 *                 type: string
 *               jam_selesai:
 *                 type: string
 *               tanggal_mulai:
 *                 type: string
 *               tanggal_selesai:
 *                 type: string
 *               hari_kursus:
 *                 type: string
 *               harga_kursus:
 *                 type: integer
 *               foto_kursus:
 *                 type: string
 *               syarat_kursus:
 *                 type: string
 *               deskripsi_kursus:
 *                 type: string
 *               modul_kursus:
 *                 type: string
 */

// =========== CREATE KURSUS ===========
/**
 * @openapi
 * components:
 *   schemas:
 *     Create Kursus:
 *       type: object
 *       required:
 *         - nama_kursus
 *         - topik_kursus
 *         - jenjang_kursus
 *         - pengajar_ID
 *         - jam_mulai
 *         - jam_selesai
 *         - tanggal_mulai
 *         - tanggal_selesai
 *         - hari_kursus
 *         - harga_kursus
 *         - foto_kursus
 *         - syarat_kursus
 *         - deskripsi_kursus
 *         - modul_kursus
 *       properties:
 *         nama_kursus:
 *           type: string
 *         topik_kursus:
 *           type: string
 *         jenjang_kursus:
 *           type: string
 *         pengajar_ID:
 *           type: string
 *         jam_mulai:
 *           type: string
 *         jam_selesai:
 *           type: string
 *         tanggal_mulai:
 *           type: string
 *         tanggal_selesai:
 *           type: string
 *         hari_kursus:
 *           type: string
 *         harga_kursus:
 *           type: integer
 *         foto_kursus:
 *           type: file
 *         syarat_kursus:
 *           type: string
 *         deskripsi_kursus:
 *           type: string
 *         modul_kursus:
 *           type: file
 *     Create Kursus Success:
 *       type: object
 *       properties:
 *         status:
 *           type: string
 *         message:
 *           type: string
 *         data:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               id_kursus:
 *                 type: string
 *               nama_kursus:
 *                 type: string
 *               topik_kursus:
 *                 type: string
 *               jenjang_kursus:
 *                 type: string
 *               pengajar:
 *                 type: object
 *                 properties:
 *                   id_pengajar:
 *                     type: string
 *                   nama_pengajar:
 *                     type: string
 *                   no_telepon_pengajar:
 *                     type: string
 *                   gelar_pengajar:
 *                     type: string
 *                   keahlian_pengajar:
 *                     type: string
 *                   pengalaman_pengajar:
 *                     type: string
 *                   biodata_pengajar:
 *                     type: string
 *                   foto_pengajar:
 *                     type: string
 *                   sertifikat_pengajar:
 *                     type: string
 *               jam_mulai:
 *                 type: string
 *               jam_selesai:
 *                 type: string
 *               tanggal_mulai:
 *                 type: string
 *               tanggal_selesai:
 *                 type: string
 *               hari_kursus:
 *                 type: string
 *               harga_kursus:
 *                 type: integer
 *               foto_kursus:
 *                 type: string
 *               syarat_kursus:
 *                 type: string
 *               deskripsi_kursus:
 *                 type: string
 *               modul_kursus:
 *                 type: string
 */

// =========== GET KURSUS BY ID ===========
/**
 * @openapi
 * components:
 *   schemas:
 *     Get Kursus By ID Success:
 *       type: object
 *       properties:
 *         status:
 *           type: string
 *         message:
 *           type: string
 *         data:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               id_kursus:
 *                 type: string
 *               nama_kursus:
 *                 type: string
 *               topik_kursus:
 *                 type: string
 *               jenjang_kursus:
 *                 type: string
 *               pengajar:
 *                 type: object
 *                 properties:
 *                   id_pengajar:
 *                     type: string
 *                   nama_pengajar:
 *                     type: string
 *                   no_telepon_pengajar:
 *                     type: string
 *                   gelar_pengajar:
 *                     type: string
 *                   keahlian_pengajar:
 *                     type: string
 *                   pengalaman_pengajar:
 *                     type: string
 *                   biodata_pengajar:
 *                     type: string
 *                   foto_pengajar:
 *                     type: string
 *                   sertifikat_pengajar:
 *                     type: string
 *               jam_mulai:
 *                 type: string
 *               jam_selesai:
 *                 type: string
 *               tanggal_mulai:
 *                 type: string
 *               tanggal_selesai:
 *                 type: string
 *               hari_kursus:
 *                 type: string
 *               harga_kursus:
 *                 type: integer
 *               foto_kursus:
 *                 type: string
 *               syarat_kursus:
 *                 type: string
 *               deskripsi_kursus:
 *                 type: string
 *               modul_kursus:
 *                 type: string
 */

// =========== UPDATE KURSUS ===========
/**
 * @openapi
 * components:
 *   schemas:
 *     Update Kursus:
 *       type: object
 *       required:
 *         - nama_kursus
 *         - topik_kursus
 *         - jenjang_kursus
 *         - pengajar_ID
 *         - jam_mulai
 *         - jam_selesai
 *         - tanggal_mulai
 *         - tanggal_selesai
 *         - hari_kursus
 *         - harga_kursus
 *         - foto_kursus
 *         - syarat_kursus
 *         - deskripsi_kursus
 *         - modul_kursus
 *       properties:
 *         nama_kursus:
 *           type: string
 *         topik_kursus:
 *           type: string
 *         jenjang_kursus:
 *           type: string
 *         pengajar_ID:
 *           type: string
 *         jam_mulai:
 *           type: string
 *         jam_selesai:
 *           type: string
 *         tanggal_mulai:
 *           type: string
 *         tanggal_selesai:
 *           type: string
 *         hari_kursus:
 *           type: string
 *         harga_kursus:
 *           type: integer
 *         foto_kursus:
 *           type: file
 *         syarat_kursus:
 *           type: string
 *         deskripsi_kursus:
 *           type: string
 *         modul_kursus:
 *           type: file
 *     Update Kursus Success:
 *       type: object
 *       properties:
 *         status:
 *           type: string
 *         message:
 *           type: string
 *         data:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               id_kursus:
 *                 type: string
 *               nama_kursus:
 *                 type: string
 *               topik_kursus:
 *                 type: string
 *               jenjang_kursus:
 *                 type: string
 *               pengajar:
 *                 type: object
 *                 properties:
 *                   id_pengajar:
 *                     type: string
 *                   nama_pengajar:
 *                     type: string
 *                   no_telepon_pengajar:
 *                     type: string
 *                   gelar_pengajar:
 *                     type: string
 *                   keahlian_pengajar:
 *                     type: string
 *                   pengalaman_pengajar:
 *                     type: string
 *                   biodata_pengajar:
 *                     type: string
 *                   foto_pengajar:
 *                     type: string
 *                   sertifikat_pengajar:
 *                     type: string
 *               jam_mulai:
 *                 type: string
 *               jam_selesai:
 *                 type: string
 *               tanggal_mulai:
 *                 type: string
 *               tanggal_selesai:
 *                 type: string
 *               hari_kursus:
 *                 type: string
 *               harga_kursus:
 *                 type: integer
 *               foto_kursus:
 *                 type: string
 *               syarat_kursus:
 *                 type: string
 *               deskripsi_kursus:
 *                 type: string
 *               modul_kursus:
 *                 type: string 
 */

// =========== DELETE KURSUS ===========
/**
 * @openapi
 * components:
 *   schemas:
 *     Delete Kursus Success:
 *       type: object
 *       properties:
 *         status:
 *           type: string
 *         message:
 *           type: string
 * 
 */