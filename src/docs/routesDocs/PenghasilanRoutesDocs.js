// =========== GET PENGHASILAN ===========
/**
 * @openapi
 * /api/penghasilan:
 *   get:
 *     tags:
 *       - Penghasilan
 *     summary: Get penghasilan
 *     description: Get penghasilan
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Get Penghasilan Success'
 * 
 */

// =========== CREATE PENGHASILAN ===========
/**
 * @openapi
 * /api/penghasilan:
 *   post:
 *     tags:
 *       - Penghasilan
 *     summary: Create penghasilan
 *     description: Create penghasilan
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Create Penghasilan'
 *     responses:
 *       201:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Create Penghasilan Success'
 */

// =========== GET PENGHASILAN BY ID ===========
/**
 * @openapi
 * /api/penghasilan/{penghasilanId}:
 *   get:
 *     tags:
 *       - Penghasilan
 *     summary: Get penghasilan by id
 *     description: Get penghasilan by id
 *     parameters:
 *       - in: path
 *         name: penghasilanId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Get Penghasilan By Id Success'
 */

// =========== UPDATE PENGHASILAN ===========
/**
 * @openapi
 * /api/penghasilan/{penghasilanId}:
 *   put:
 *     tags:
 *       - Penghasilan
 *     summary: Update penghasilan
 *     description: Update penghasilan
 *     parameters:
 *       - in: path
 *         name: penghasilanId
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Update Penghasilan'
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Update Penghasilan Success'
 * 
 */

// =========== DELETE PENGHASILAN ===========
/**
 * @openapi
 * /api/penghasilan/{penghasilanId}:
 *   delete:
 *     tags:
 *       - Penghasilan
 *     summary: Delete penghasilan
 *     description: Delete penghasilan
 *     parameters:
 *       - in: path
 *         name: penghasilanId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Delete Penghasilan Success'
 *
 * 
 */