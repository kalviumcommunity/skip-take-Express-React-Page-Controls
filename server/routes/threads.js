```js
import { Router } from "express";
import prisma from "../prisma/client.js";

const router = Router();

// GET all threads
router.get("/", async (req, res, next) => {
  try {
    const threads = await prisma.thread.findMany({
      orderBy: {
        createdAt: "desc",
      },

      include: {
        // Get author information
        author: {
          select: {
            name: true,
            avatarUrl: true,
          },
        },

        // Get the number of comments
        _count: {
          select: {
            comments: true,
          },
        },
      },
    });

    res.status(200).json({
      threads,
    });
  } catch (error) {
    next(error);
  }
});

export default router;
```

