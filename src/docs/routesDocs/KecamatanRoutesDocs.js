// =========== GET KECAMATAN ===========
/**
 * @openapi
 * /api/kecamatan:
 *   get:
 *     tags:
 *       - Kecamatan
 *     summary: Get kecamatan
 *     description: Get kecamatan
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Get Kecamatan Success'
 *
 * 
 */

// =========== CREATE KECAMATAN ===========
/**
 * @openapi
 * /api/kecamatan:
 *   post:
 *     tags:
 *       - Kecamatan
 *     summary: Create kecamatan
 *     description: Create kecamatan
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Create Kecamatan'
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Create Kecamatan Success'
 *
 * 
 */

// =========== GET KECAMATAN BY ID ===========
/**
 * @openapi
 * /api/kecamatan/{kecamatanId}:
 *   get:
 *     tags:
 *       - Kecamatan
 *     summary: Get kecamatan by id
 *     description: Get kecamatan by id
 *     parameters:
 *       - in: path
 *         name: kecamatanId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Get Kecamatan By Id Success'
 * 
 */

// =========== UPDATE KECAMATAN ===========
/**
 * @openapi
 * /api/kecamatan/{kecamatanId}:
 *   put:
 *     tags:
 *       - Kecamatan
 *     summary: Update kecamatan
 *     description: Update kecamatan
 *     parameters:
 *       - in: path
 *         name: kecamatanId
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Create Kecamatan'
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Create Kecamatan Success'
 * 
 */

// =========== DELETE KECAMATAN ===========
/**
 * @openapi
 * /api/kecamatan/{kecamatanId}:
 *   delete:
 *     tags:
 *       - Kecamatan
 *     summary: Delete kecamatan
 *     description: Delete kecamatan
 *     parameters:
 *       - in: path
 *         name: kecamatanId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Delete Kecamatan Success'
 * 
 */