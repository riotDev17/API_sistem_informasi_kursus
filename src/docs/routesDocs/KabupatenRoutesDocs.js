// =========== GET KABUPATEN ===========
/**
 * @openapi
 * /api/kabupaten:
 *   get:
 *     tags:
 *       - Kabupaten
 *     summary: Get kabupaten
 *     description: Get kabupaten
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Get Kabupaten Success'
 * 
 */

// =========== CREATE KABUPATEN ===========
/**
 * @openapi
 * /api/kabupaten:
 *   post:
 *     tags:
 *       - Kabupaten
 *     summary: Create kabupaten
 *     description: Create kabupaten
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Create Kabupaten'
 *     responses:
 *       201:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Create Kabupaten Success'
 *
 * 
 */

// =========== GET KABUPATEN BY ID ===========
/**
 * @openapi
 * /api/kabupaten/{kabupatenId}:
 *   get:
 *     tags:
 *       - Kabupaten
 *     summary: Get kabupaten by id
 *     description: Get kabupaten by id
 *     parameters:
 *       - in: path
 *         name: kabupatenId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Get Kabupaten By Id Success'
 * 
 */

// =========== UPDATE KABUPATEN ===========
/**
 * @openapi
 * /api/kabupaten/{kabupatenId}:
 *   put:
 *     tags:
 *       - Kabupaten
 *     summary: Update kabupaten
 *     description: Update kabupaten
 *     parameters:
 *       - in: path
 *         name: kabupatenId
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Create Kabupaten'
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Create Kabupaten Success'
 * 
 */

// =========== DELETE KABUPATEN ===========
/**
 * @openapi
 * /api/kabupaten/{kabupatenId}:
 *   delete:
 *     tags:
 *       - Kabupaten
 *     summary: Delete kabupaten
 *     description: Delete kabupaten
 *     parameters:
 *       - in: path
 *         name: kabupatenId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Delete Kabupaten Success'
 *
 * 
 */