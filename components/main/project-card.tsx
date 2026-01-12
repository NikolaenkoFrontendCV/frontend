import Card from "../cards/card";
import CardImage from "../cards/card-media";
import CardContent from "../cards/card-content";
import CardInfo from "../cards/card-info";
import CardTitle from "../cards/card-title";
import CardDescription from "../cards/card-description";
import CardAction from "../cards/card-action";
import ShowMoreLink from "../links/show-more-link";

export default function ProjectCard({
  imageSrc,
  title,
  description,
}: {
  imageSrc: string;
  title: string;
  description: string;
}) {
  return (
    <Card>
      <CardImage src={imageSrc} alt={title} />
      <CardContent>
        <CardInfo>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardInfo>
        <CardAction>
          <ShowMoreLink href={"#"} />
        </CardAction>
      </CardContent>
    </Card>
  );
}
