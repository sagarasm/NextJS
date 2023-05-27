import Link from "next/link";
import React from "react";

interface MyComponentProps {
  data: Array<{
    id: number;
    name: string;
  }>;
}

const MyComponent: React.FC<MyComponentProps> = ({ data }) => {
  return (
    <div className="layer">
      <div className="wrapper">
        <div className="container">
          {data ? (
            <ul>
              {data.map((item) => (
                <li key={item.id}>
                  <Link href={`/blogs/${item.id}`}>{item.name}</Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.log("Error fetching data:", error);
    return {
      props: {
        data: null,
      },
    };
  }
}

export default MyComponent;
