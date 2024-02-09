// =========== GET KELURAHAN ===========
/**
 * @openapi
 * /api/kelurahan:
 *   get:
 *     tags:
 *       - Kelurahan
 *     summary: Get all Kelurahan
 *     responses:
 *       200:
 *         description: Success Get Kelurahan
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Get Kelurahan Success'
 * 
 */

// =========== CREATE KELURAHAN ===========
/**
 * @openapi
 * /api/kelurahan:
 *   post:
 *     tags:
 *       - Kelurahan
 *     summary: Create Kelurahan
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Create Kelurahan'
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Create Kelurahan Success'
 *
 * 
 */

// =========== GET KELURAHAN BY ID ===========
/**
 * @openapi
 * /api/kelurahan/{keluharanId}:
 *   get:
 *     tags:
 *       - Kelurahan
 *     summary: Get Kelurahan By Id
 *     parameters:
 *       - in: path
 *         name: keluharanId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success Get Kelurahan By Id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Get Kelurahan By Id Success'
 * 
 */

// =========== UPDATE KELURAHAN ===========
/**
 * @openapi
 * /api/kelurahan/{kelurahanId}:
 *   put:
 *     tags:
 *       - Kelurahan
 *     summary: Update Kelurahan
 *     description: Update Kelurahan
 *     parameters:
 *       - in: path
 *         name: kelurahanId
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Create Kelurahan'
 *     responses:
 *       200:
 *         description: Updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Create Kelurahan Success'
 *
 * 
 */

// =========== DELETE KELURAHAN ===========
/**
 * @openapi
 * /api/kelurahan/{kelurahanId}:
 *   delete:
 *     tags:
 *       - Kelurahan
 *     summary: Delete Kelurahan
 *     description: Delete Kelurahan
 *     parameters:
 *       - in: path
 *         name: kelurahanId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Deleted
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Delete Kelurahan Success'
 * 
 */