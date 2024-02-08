// =========== GET PROVINSI ===========
/**
 * @openapi
 * /api/provinsi:
 *   get:
 *     tags:
 *       - Provinsi
 *     summary: Get provinsi
 *     description: Get provinsi
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Get Provinsi Success'
 */

// =========== CREATE PROVINSI ===========
/**
 * @openapi
 * /api/provinsi:
 *   post:
 *     tags:
 *       - Provinsi
 *     summary: Create provinsi
 *     description: Create provinsi
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Create Provinsi'
 *     responses:
 *       201:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Create Provinsi Success'
 *
 * 
 */

// =========== GET PROVINSI BY ID ===========
/**
 * @openapi
 * /api/provinsi/{provinsiId}:
 *   get:
 *     tags:
 *       - Provinsi
 *     summary: Get provinsi by id
 *     description: Get provinsi by id
 *     parameters:
 *       - in: path
 *         name: provinsiId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Get Provinsi By Id Success'
 * 
 */

// =========== UPDATE PROVINSI ===========
/**
 * @openapi
 * /api/provinsi/{provinsiId}:
 *   put:
 *     tags:
 *       - Provinsi
 *     summary: Update provinsi
 *     description: Update provinsi
 *     parameters:
 *       - in: path
 *         name: provinsiId
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Create Provinsi'
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Create Provinsi Success'
 * 
 */

// =========== DELETE PROVINSI ===========
/**
 * @openapi
 * /api/provinsi/{provinsiId}:
 *   delete:
 *     tags:
 *       - Provinsi
 *     summary: Delete provinsi
 *     description: Delete provinsi
 *     parameters:
 *       - in: path
 *         name: provinsiId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Delete Provinsi Success'
 *
 * 
 */