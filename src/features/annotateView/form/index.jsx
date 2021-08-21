import { ReactPictureAnnotation } from "./react-picture-annotation/index";
import H1 from "ui/heading/h1";

export default function AnnotateForm({ selectedObjects,newObjects,detectedObjects,url, id}) {
  const onSelect = (selectedId) => {};
  const onChange = (data) => {};

  return (
    <div className="px-5">
      <ReactPictureAnnotation
        image={url}
        onSelect={onSelect}
        onChange={onChange}
        width={640 * 1.5}
        height={400 * 1.5}
        annotationData={detectedObjects}
        imageID={id}
        currentAnnotationCount={0}
        username={"test"}
      />
    </div>
  );
}

