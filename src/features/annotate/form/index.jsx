import { ReactPictureAnnotation } from "./react-picture-annotation/index";
import H1 from 'ui/heading/h1';

export default function AnnotateForm({ data, current, total }) {
  const onSelect = (selectedId) => {};
  const onChange = (data) => {};

  return (
    <div>
      <H1 className><span className="text-2xl uppercase font-thin">Currently Annotating:</span><br /> Image  #{current} / {total}</H1>
      <ReactPictureAnnotation
        image={data.url}
        onSelect={onSelect}
        onChange={onChange}
        width={640 * 1.5}
        height={400 * 1.5}
        annotationData={data.annotationList}
        imageID={data._id}
        currentAnnotationCount={current}
      />
    </div>
  );
}
