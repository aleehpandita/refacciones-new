import authorImage from "@/images/author-1-1.jpg";
import image from "@/images/blog-single-1-1.jpg";

const text1 =
  "There are many variations of passages of available but majority have alteration in some by inject humour or random words. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.";
const text2 =
  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the like.";

export const comments = [
  {
    id: 1,
    image: "comment-1-1.jpg",
    author: "Laquanda Bachmeier",
    date: "20 April, 2019",
    time: "4:00 pm",
    message:
      "Lorem Ipsum is simply dummy text of the rinting and typesetting been the industry standard dummy text ever sincer condimentum purus. In non ex at ligula fringilla lobortis et not the aliquet.",
  },
  {
    id: 2,
    image: "comment-1-2.jpg",
    author: "Vicente Elmore",
    date: "20 April, 2019",
    time: "4:00 pm",
    message:
      "Lorem Ipsum is simply dummy text of the rinting and typesetting been the industry standard dummy text ever sincer condimentum purus. In non ex at ligula fringilla lobortis et not the aliquet.",
  },
];

export const blogDetailsContent = {
  image,
  date: "30 April, 2019",
  author: "Admin",
  totalComments: comments.length,
  title: "Pre launch mobile app marketing pitfalls",
  texts: [text1, text2],
};

export const blogAuthor = {
  image: authorImage,
  name: "Christine Eve",
  description:
    "Lorem Ipsum is simply dummy text of the rinting and typesetting beenthe industry standard dummy text ever sincer condimentum purus. In non ex at ligula fringilla lobortis et not the aliquet.",
};

export const sidebar = {
  posts: [
    {
      id: 1,
      image: "lp-1-1.jpg",
      title: "Basic rules of running web agency",
    },
    {
      id: 2,
      image: "lp-1-2.jpg",
      title: "Basic rules of running web agency",
    },
    {
      id: 3,
      image: "lp-1-3.jpg",
      title: "Basic rules of running web agency",
    },
  ],
  categories: [
    "Business",
    "Introductions",
    "One Page Template",
    "Parallax Effects",
    "New Technologies",
    "Video Backgrounds",
  ],
  tags: [
    "Business",
    "Agency",
    "Technology",
    "Parallax",
    "Innovative",
    "Professional",
    "Experience",
  ],
};
