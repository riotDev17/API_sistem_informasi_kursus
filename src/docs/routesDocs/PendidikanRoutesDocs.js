// =========== GET PENDIDIKAN ===========
/**
 * @openapi
 * /api/pendidikan:
 *   get:
 *     tags:
 *       - Pendidikan
 *     summary: Get pendidikan
 *     description: Get pendidikan
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Get Pendidikan Success'
 */

// =========== CREATE PENDIDIKAN ===========
/**
 * @openapi
 * /api/pendidikan:
 *   post:
 *     tags:
 *       - Pendidikan
 *     summary: Create pendidikan
 *     description: Create pendidikan
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Create Pendidikan'
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Create Pendidikan Success'
 */

// =========== GET PENDIDIKAN BY ID ===========
/**
 * @openapi
 * /api/pendidikan/{pendidikanId}:
 *   get:
 *     tags:
 *       - Pendidikan
 *     summary: Get pendidikan by id
 *     description: Get pendidikan by id
 *     parameters:
 *       - in: path
 *         name: pendidikanId
 *         required: true
 *         schema:
 *           type: string
 *         description: Pendidikan id
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Get Pendidikan By Id Success'
 *
 */

// =========== UPDATE PENDIDIKAN ===========
/**
 * @openapi
 * /api/pendidikan/{pendidikanId}:
 *   put:
 *     tags:
 *       - Pendidikan
 *     summary: Update pendidikan
 *     description: Update pendidikan
 *     parameters:
 *       - in: path
 *         name: pendidikanId
 *         required: true
 *         schema:
 *           type: string
 *         description: Pendidikan id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Update Pendidikan'
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Update Pendidikan Success'
 */

// =========== DELETE PENDIDIKAN ===========
/**
 * @openapi
 * /api/pendidikan/{pendidikanId}:
 *   delete:
 *     tags:
 *       - Pendidikan
 *     summary: Delete pendidikan
 *     description: Delete pendidikan
 *     parameters:
 *       - in: path
 *         name: pendidikanId
 *         required: true
 *         schema:
 *           type: string
 *         description: Pendidikan id
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Delete Pendidikan Success'
 *
 * 
 */