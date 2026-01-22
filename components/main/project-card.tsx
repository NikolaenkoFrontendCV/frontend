import Card from "../cards/card";
import CardImage from "../cards/card-media";
import CardContent from "../cards/card-content";
import CardInfo from "../cards/card-info";
import CardTitle from "../cards/card-title";
import CardDescription from "../cards/card-description";
import CardAction from "../cards/card-action";
import ShowMoreButton from "../buttons/show-more-button";
import { useAppDispatch } from "@/lib/hooks/redux-store";
import { setDialogContent } from "@/lib/features/dialog-conent/dialogContentSlice";

export default function ProjectCard({
  id,
  imageSrc,
  title,
  description,
}: {
  id: number;
  imageSrc: string;
  title: string;
  description: string;
}) {
  const dispatch = useAppDispatch();

  function handleShowMore() {
    dispatch(setDialogContent({type: "cases", itemId: id}))
  }

  return (
    <Card>
      <CardImage src={imageSrc} alt={title} />
      <CardContent>
        <CardInfo>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardInfo>
        <CardAction>
          <ShowMoreButton onClick={handleShowMore}/>
        </CardAction>
      </CardContent>
    </Card>
  );
}
