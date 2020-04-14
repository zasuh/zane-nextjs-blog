import Link from "next/link";

export default function Header(props) {
  return (
    <header className="header">
      <div
        className="nav"
        role="navigation"
        aria-label="main navigation"
      >
        <Link href="/">
          <h1>{props.siteTitle}</h1>
        </Link>
        <p style={{marginTop: '10px'}}>Slovenian based web developer.</p>
        <ul>
          <li>
            <a href="https://twitter.com/zasuh_">Twitter</a>
          </li>
          <li>
            <a href="https://github.com/zasuh">GitHub</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/zasuhadolnik/">LinkedIn</a>
          </li>
        </ul>
      </div>
      <style jsx>
        {`
          ul li {
            display: inline;
            margin-right: 20px;
          }
          h1 {
            margin-bottom: 0;
            color: #FBBA72;
          }
          h1:hover {
            cursor: pointer;
          }
          nav {
            padding: 1.5rem 1.25rem;
            border-bottom: 1px solid #ebebeb;
            display: flex;
            justify-content: space-between;
            flex-direction: row;
            align-items: center;
          }
          @media (min-width: 768px) {
            .header {
              height: 100vh;
              position: fixed;
              left: 0;
              top: 0;
            }
            .nav {
              padding: 2rem;
              width: 30vw;
              height: 100%;
              border-bottom: none;
              flex-direction: column;
              align-items: flex-start;
            }
          }
        `}
      </style>
    </header>
  );
}

