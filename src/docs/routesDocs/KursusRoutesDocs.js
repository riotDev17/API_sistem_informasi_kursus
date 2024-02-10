// =========== GET KURSUS ===========
/**
 * @openapi
 * /api/kursus:
 *   get:
 *     tags:
 *       - Kursus
 *     summary: Get all Kursus
 *     responses:
 *       200:
 *         description: Success Get Kursus
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Get Kursus Success'
 *
 */

// =========== CREATE KURSUS ===========
/**
 * @openapi
 * /api/kursus:
 *   post:
 *     tags:
 *       - Kursus
 *     summary: Create new Kursus
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             $ref: '#/components/schemas/Create Kursus'
 *     responses:
 *       201:
 *         description: Success Create Kursus
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Create Kursus Success'
 */

// =========== GET KURSUS BY ID ===========
/**
 * @openapi
 * /api/kursus/{kursusId}:
 *   get:
 *     tags:
 *       - Kursus
 *     summary: Get Kursus by ID
 *     parameters:
 *       - in: path
 *         name: kursusId
 *         required: true
 *         description: ID Kursus
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success Get Kursus by ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Get Kursus By ID Success'
 *
 */

// =========== UPDATE KURSUS ===========
/**
 * @openapi
 * /api/kursus/{kursusId}:
 *   put:
 *     tags:
 *       - Kursus
 *     summary: Update Kursus by ID
 *     parameters:
 *       - in: path
 *         name: kursusId
 *         required: true
 *         description: ID Kursus
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             $ref: '#/components/schemas/Update Kursus'
 *     responses:
 *       200:
 *         description: Success Update Kursus
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Update Kursus Success'
 *
 * 
 */

// =========== DELETE KURSUS ===========
/**
 * @openapi
 * /api/kursus/{kursusId}:
 *   delete:
 *     tags:
 *       - Kursus
 *     summary: Delete Kursus by ID
 *     parameters:
 *       - in: path
 *         name: kursusId
 *         required: true
 *         description: ID Kursus
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success Delete Kursus
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Delete Kursus Success'
 * 
 */