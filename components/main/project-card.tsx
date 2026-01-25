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
import useGetLang from "@/lib/hooks/get-lang";

export default function ProjectCard({
  id,
  imageSrc,
  title,
  description,
}: {
  id: number;
  imageSrc: string;
  title: string;
  description: {
    ru: string;
    en: string;
  };
}) {
  const dispatch = useAppDispatch();
  const lang = useGetLang();

  function handleShowMore() {
    dispatch(setDialogContent({ type: "cases", itemId: id }));
  }

  return (
    <Card>
      <CardImage src={imageSrc} alt={title} />
      <CardContent>
        <CardInfo>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description[lang]}</CardDescription>
        </CardInfo>
        <CardAction>
          <ShowMoreButton onClick={handleShowMore} />
        </CardAction>
      </CardContent>
    </Card>
  );
}
