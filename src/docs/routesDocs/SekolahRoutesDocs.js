// =========== GET SEKOLAH ===========
/**
 * @openapi
 * /api/sekolah:
 *   get:
 *     tags:
 *       - Sekolah
 *     summary: Get sekolah
 *     description: Get sekolah
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Get Sekolah Success'
 */

// =========== CREATE SEKOLAH ===========
/**
 * @openapi
 * /api/sekolah:
 *   post:
 *     tags:
 *       - Sekolah
 *     summary: Create sekolah
 *     description: Create sekolah
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Create Sekolah'
 *     responses:
 *       201:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Create Sekolah Success'
 *
 */

// =========== GET SEKOLAH BY ID ===========
/**
 * @openapi
 * /api/sekolah/{sekolahId}:
 *   get:
 *     tags:
 *       - Sekolah
 *     summary: Get sekolah by Id
 *     description: Get sekolah by ID
 *     parameters:
 *       - in: path
 *         name: sekolahId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Get Sekolah By ID Success'
 *
 */

// =========== UPDATE SEKOLAH ===========
/**
 * @openapi
 * /api/sekolah/{sekolahId}:
 *   put:
 *     tags:
 *       - Sekolah
 *     summary: Update sekolah
 *     description: Update sekolah
 *     parameters:
 *       - in: path
 *         name: sekolahId
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Update Sekolah'
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Update Sekolah Success'
 * 
 */

// =========== DELETE SEKOLAH ===========
/**
 * @openapi
 * /api/sekolah/{sekolahId}:
 *   delete:
 *     tags:
 *       - Sekolah
 *     summary: Delete sekolah
 *     description: Delete sekolah
 *     parameters:
 *       - in: path
 *         name: sekolahId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Delete Sekolah Success'
 *
 * 
 */