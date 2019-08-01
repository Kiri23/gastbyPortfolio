/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"

const Footer = () => {
  const {
    footerYaml: { facebook, twitter, github, linkedin },
  } = useStaticQuery(graphql`
    query {
      footerYaml {
        facebook
        github
        linkedin
        twitter
      }
    }
  `)
  return (
    <div
      sx={{
        p: 3,
        width: "100%",
        backgroundColor: "primary",
        color: "white",
        textAlign: "center",
      }}
    >
      <div>
        {facebook && (
          <Link to={facebook}>
            <i className="fab fa-facebook" />
          </Link>
        )}
        {linkedin && (
          <Link to={linkedin}>
            <i className="fab fa-linkedin" />
          </Link>
        )}
        {github && (
          <Link to={github}>
            <i className="fab fa-github" />
          </Link>
        )}
        {twitter && (
          <Link to={twitter}>
            <i className="fab fa-twitter" />
          </Link>
        )}
      </div>
      <Styled.p sx={{ fontSize: 1 }}>
        © All rights are reserved | {new Date().getFullYear()} |{" "}
        <a
          href="https://renne.tech"
          rel="noopener noreferrer"
          target="_blank"
          sx={{ color: "white" }}
        >
          Renne Hirsimäki
        </a>
      </Styled.p>
    </div>
  )
}

export default Footer

const Link = ({ to, children }) => (
  <a
    href={to}
    target="_blank"
    rel="noopener noreferrer"
    sx={{
      fontSize: 5,
      color: "white",
      mx: 2,
      ":hover": { color: "#D3D3D3" },
      transition: "color 200ms ease-in-out",
    }}
  >
    {children}
  </a>
)
