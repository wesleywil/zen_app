import { PrismaClient } from "@prisma/client";
import cors from "cors";
import express from "express";

const prisma = new PrismaClient();
const app = express();

app.use(express.json());
app.use(cors());

// app.post(`/user`, async (req, res) => {
//   const result = await prisma.user.create({
//     data: {
//       ...req.body,
//     },
//   });
//   res.json(result);
// });

app.get("/tracks", async (req, res) => {
  const tracks = await prisma.track.findMany({
    include: { tracks: true },
  });
  res.json(tracks);
});

app.post("/track_day", async (req, res) => {
  const { feeling } = req.body;
  const track = await prisma.track_day.create({
    data: {
      feeling,
      track: { connect: { id: 1 } },
    },
  });
  res.json(track);
});

app.get("/track_day", async (req, res) => {
  const days = await prisma.track_day.findMany({});
  res.json(days);
});

// app.get("/drafts", async (req, res) => {
//   const posts = await prisma.post.findMany({
//     where: { published: false },
//     include: { author: true },
//   });
//   res.json(posts);
// });

// app.get("/feed", async (req, res) => {
//   const posts = await prisma.post.findMany({
//     where: { published: true },
//     include: { author: true },
//   });
//   res.json(posts);
// });

// app.get("/filterPosts", async (req, res) => {
//   const { searchString }: { searchString?: string } = req.query;
//   const filteredPosts = await prisma.post.findMany({
//     where: {
//       OR: [
//         {
//           title: {
//             contains: searchString,
//           },
//         },
//         {
//           content: {
//             contains: searchString,
//           },
//         },
//       ],
//     },
//   });
//   res.json(filteredPosts);
// });

// app.post(`/post`, async (req, res) => {
//   const { title, content, authorEmail } = req.body;
//   const result = await prisma.post.create({
//     data: {
//       title,
//       content,
//       published: false,
//       author: { connect: { email: authorEmail } },
//     },
//   });
//   res.json(result);
// });

// app.delete(`/post/:id`, async (req, res) => {
//   const { id } = req.params;
//   const post = await prisma.post.delete({
//     where: {
//       id: Number(id),
//     },
//   });
//   res.json(post);
// });

// app.get(`/post/:id`, async (req, res) => {
//   const { id } = req.params;
//   const post = await prisma.post.findUnique({
//     where: {
//       id: Number(id),
//     },
//     include: { author: true },
//   });
//   res.json(post);
// });

// app.put("/publish/:id", async (req, res) => {
//   const { id } = req.params;
//   const post = await prisma.post.update({
//     where: { id: Number(id) },
//     data: { published: true },
//   });
//   res.json(post);
// });

const server = app.listen(8000, () =>
  console.log("🚀 Server ready at: http://localhost:8000")
);
