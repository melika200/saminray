import "./Intro.css";
export default function Intro() {
  const advertisments = [
    {
      id: 1,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYS0dLjDzfdHNAARitw5MzEO6ZSLKOz9YchLTXQT3bpdCo_WPfTKwu5uNSQcu2nCXDmeI&usqp=CAU",
      comment:
        "Frontend refers to the visible part of a website or application that users interact with. It encompasses the design and user experience aspects, and is typically built using programming languages like HTML, CSS, and JavaScript. Front-end developers are responsible for creating this user-facing aspect of web applications.",
    },
    {
      id: 2,
      img: "https://permutable.ai/wp-content/uploads/2024/03/19301.jpg",
      comment:
        "UX, or User Experience, refers to how users interact with a website or application, encompassing their perceptions and behaviors during that interaction. It focuses on enhancing user satisfaction by improving usability, accessibility, and pleasure in the interaction, which is crucial for retaining users and optimizing designs.",
    },
    {
      id: 3,
      img: "https://potomac.edu/wp-content/uploads/2020/12/benefits-of-coding-e1606911064541.jpg",
      comment:
        "Backend refers to the server-side part of a web application or software that focuses on the functionality and logic of the application, away from the user view. It encompasses language programming, database management, and server handling, crucial for processing requests, storing data, and serving responses to the frontend.",
    },
  ];
  return (
    <>
      <container>
        <row className="row ">
          <h1 style={{ textAlign: "center" }}>Intro</h1>
          {advertisments.map((advertisment) => (
            <div className="col cardInfo ">
              <img
                className="cardIntro"
                style={{ width: "100%" }}
                src={advertisment.img}
              />
              <p
                style={{
                  margin: "12px",
                  textAlign: "center",
                  fontSize: "13px",
                }}
              >
                {advertisment.comment}
              </p>
            </div>
          ))}
        </row>
      </container>
    </>
  );
}
