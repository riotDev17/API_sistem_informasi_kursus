// =========== GET PEKERJAAN ===========
/**
 * @openapi
 * /api/pekerjaan:
 *   get:
 *     tags:
 *       - Pekerjaan
 *     summary: Get pekerjaan
 *     description: Get pekerjaan
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Get Pekerjaan Success'
 */

// =========== CREATE PEKERJAAN ===========
/**
 * @openapi
 * /api/pekerjaan:
 *   post:
 *     tags:
 *       - Pekerjaan
 *     summary: Create pekerjaan
 *     description: Create pekerjaan
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Create Pekerjaan'
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Create Pekerjaan Success'
 *
 */

// =========== GET PEKERJAAN BY ID ===========
/**
 * @openapi
 * /api/pekerjaan/{pekerjaanId}:
 *   get:
 *     tags:
 *       - Pekerjaan
 *     summary: Get pekerjaan by id
 *     description: Get pekerjaan by id
 *     parameters:
 *       - in: path
 *         name: pekerjaanId
 *         required: true
 *         description: Pekerjaan id
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Get Pekerjaan By Id Success'
 */

// =========== UPDATE PEKERJAAN ===========
/**
 * @openapi
 * /api/pekerjaan/{pekerjaanId}:
 *   put:
 *     tags:
 *       - Pekerjaan
 *     summary: Update pekerjaan
 *     description: Update pekerjaan
 *     parameters:
 *       - in: path
 *         name: pekerjaanId
 *         required: true
 *         description: Pekerjaan id
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Create Pekerjaan'
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Update Pekerjaan Success'
 * 
 */

// =========== DELETE PEKERJAAN ===========
/**
 * @openapi
 * /api/pekerjaan/{pekerjaanId}:
 *   delete:
 *     tags:
 *       - Pekerjaan
 *     summary: Delete pekerjaan
 *     description: Delete pekerjaan
 *     parameters:
 *       - in: path
 *         name: pekerjaanId
 *         required: true
 *         description: Pekerjaan id
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Delete Pekerjaan Success'
 *
 * 
 * 
 */