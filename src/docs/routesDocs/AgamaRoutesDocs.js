// =========== GET AGAMA ===========
/**
 * @openapi
 * /api/agama:
 *   get:
 *     tags:
 *       - Agama
 *     summary: Get agama
 *     description: Get agama
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Get Agama Success'
 */

// =========== CREATE AGAMA ===========
/**
 * @openapi
 * /api/agama:
 *   post:
 *     tags:
 *       - Agama
 *     summary: Create agama
 *     description: Create agama
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Create Agama'
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Create Agama Success'
 *
 *
 *
 */

// =========== GET AGAMA BY ID ===========
/**
 * @openapi
 * /api/agama/{agamaId}:
 *   get:
 *     tags:
 *       - Agama
 *     summary: Get agama by id
 *     description: Get agama by id
 *     parameters:
 *       - in: path
 *         name: agamaId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Get Agama By Id Success'
 *
 *
 */

// =========== UPDATE AGAMA ===========
/**
 * @openapi
 * /api/agama/{agamaId}:
 *   put:
 *     tags:
 *       - Agama
 *     summary: Update agama
 *     description: Update agama
 *     parameters:
 *       - in: path
 *         name: agamaId
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Update Agama'
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Update Agama Success'
 *
 *
 */

// =========== DELETE AGAMA ===========
/**
 * @openapi
 * /api/agama/{agamaId}:
 *   delete:
 *     tags:
 *       - Agama
 *     summary: Delete agama
 *     description: Delete agama
 *     parameters:
 *       - in: path
 *         name: agamaId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Delete Agama Success'
 *
 *
 */
