// =========== USERS REGISTER ===========

/**
 * @openapi
 * /api/users/signup:
 *   post:
 *     tags:
 *       - Users
 *     summary: Register a new user
 *     description: Register a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Register User'
 *     responses:
 *       201:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Register User Success'
 */

// =========== VERIFY EMAIL ===========

/**
 * @openapi
 * /api/users/verify:
 *   post:
 *     tags:
 *       - Users
 *     summary: Verify user email
 *     description: Verify user email
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Verify Email'
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Verify Email Success'
 *
 *
 */

// =========== USERS LOGIN ===========

/**
 * @openapi
 * /api/users/signin:
 *   post:
 *     tags:
 *       - Users
 *     summary: Login user
 *     description: Login user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Login User'
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Login User Success'
 */

// =========== USERS LOGOUT ===========

/**
 * @openapi
 * /api/users/logout:
 *   delete:
 *     tags:
 *       - Users
 *     summary: Logout user
 *     description: Logout user
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Logout User Success'
 */

// =========== USERS GET ===========

/**
 * @openapi
 * /api/users:
 *   get:
 *     tags:
 *       - Users
 *     summary: Get user
 *     description: Get user
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Get User Success'
 */

// =========== USERS UPDATE ===========

/**
 * @openapi
 * /api/users/:userId:
 *   put:
 *     tags:
 *       - Users
 *     summary: Update user
 *     description: Update user
 *     parameters:
 *       - name: userId
 *         in: path
 *         required: true
 *         description: User ID
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             $ref: '#/components/schemas/Update User'
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Update User Success'
 *
 */
