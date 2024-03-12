import { Carousel } from "react-bootstrap";

export default function TopCarousel() {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img
            src="https://images.nationalgeographic.org/image/upload/v1638892378/EducationHub/photos/americans-voting.jpg"
            text="First slide"
            style={{
              maxHeight: "600px",
              maxWidth: "800px"
            }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://www.inquirer.com/resizer/MehMfSsaJXxWrlzC6bYb3A7frIQ=/arc-anglerfish-arc2-prod-pmn/public/4ZAERN4EKVENDCYIB752VS4RGQ.jpg"
            text="First slide"
            style={{
              maxHeight: "600px",
              maxWidth: "800px",
            }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://cloudfront-us-east-2.images.arcpublishing.com/reuters/W42NGADA6BO3RG2TOMOR4JNMJQ.jpg"
            text="First slide"
            style={{
              maxHeight: "600px",
              maxWidth: "800px"
            }}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
