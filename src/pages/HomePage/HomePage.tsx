import { Link } from "react-router-dom";
import Container from "../../components/Container/Container";
import Section from "../../components/Section/Section";
import Button from "../../components/Button/Button";

function HomePage() {
  return (
    <Container>
      <Section>
        <h1 className="text-text font-semibold text-4xl leading-tight text-center mb-6 sm:text-5xl">
          Hi! This single-page app is written in TypeScript with Rect, Redux,
          Tailwind, and additional libraries. Let's start exploring.
        </h1>

        <Link to="/catalog">
          <Button className="w-[173px] h-[56px] mx-auto" style="confirm">
            View Now
          </Button>
        </Link>
      </Section>
    </Container>
  );
}

export default HomePage;
