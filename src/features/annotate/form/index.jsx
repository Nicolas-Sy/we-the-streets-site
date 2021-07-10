import { ReactPictureAnnotation } from "./react-picture-annotation/index";
import H1 from "ui/heading/h1";
import { getSession, useSession } from "next-auth/client";

export default function AnnotateForm({ data, current, total }) {
  const onSelect = (selectedId) => {};
  const onChange = (data) => {};
  const [session, loading] = useSession();

  if (typeof window !== "undefined" && loading) return null;

  return (
    <div>
      <H1 className>
        <span className="text-2xl uppercase font-thin">
          Currently Annotating:
        </span>
        <br /> Image #{current} / {total}
      </H1>
      <ReactPictureAnnotation
        image={data.url}
        onSelect={onSelect}
        onChange={onChange}
        width={640 * 1.5}
        height={400 * 1.5}
        annotationData={data.annotationList}
        imageID={data._id}
        currentAnnotationCount={current}
        username={session.user.username}
      />
    </div>
  );
}

AnnotateForm.getInitialProps = async (context) => {
  const session = await getSession(context);
  return {
    props: { session },
  };
};
