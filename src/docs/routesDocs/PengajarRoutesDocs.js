// =========== GET PENGAJAR ===========
/**
 * @openapi
 * /api/pengajar:
 *   get:
 *     tags:
 *       - Pengajar
 *     summary: Get all pengajar
 *     description: Get all pengajar
 *     responses:
 *       200:
 *         description: Success get all pengajar
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Get Pengajar Success'
 */

// =========== CREATE PENGAJAR ===========
/**
 * @openapi
 * /api/pengajar:
 *   post:
 *     tags:
 *       - Pengajar
 *     summary: Create pengajar
 *     description: Create pengajar
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             $ref: '#/components/schemas/Create Pengajar'
 *     responses:
 *       201:
 *         description: Success create pengajar
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Create Pengajar Success'
 * 
 */

// =========== GET PENGAJAR BY ID ===========
/**
 * @openapi
 * /api/pengajar/{pengajarId}:
 *   get:
 *     tags:
 *       - Pengajar
 *     summary: Get pengajar by Id
 *     description: Get pengajar by id
 *     parameters:
 *       - in: path
 *         name: pengajarId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success get pengajar by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Get Pengajar By Id Success'
 *
 * 
 */

// =========== UPDATE PENGAJAR ===========
/**
 * @openapi
 * /api/pengajar/{pengajarId}:
 *   put:
 *     tags:
 *       - Pengajar
 *     summary: Update pengajar
 *     description: Update pengajar
 *     parameters:
 *       - in: path
 *         name: pengajarId
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             $ref: '#/components/schemas/Update Pengajar'
 *     responses:
 *       200:
 *         description: Success update pengajar
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Update Pengajar Success'
 * 
 */

// =========== DELETE PENGAJAR ===========
/**
 * @openapi
 * /api/pengajar/{pengajarId}:
 *   delete:
 *     tags:
 *       - Pengajar
 *     summary: Delete pengajar
 *     description: Delete pengajar
 *     parameters:
 *       - in: path
 *         name: pengajarId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success delete pengajar
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Delete Pengajar Success'
 * 
 */