import { useRouter } from "next/router";

import H2 from "ui/heading/h2";
import OutlineButton from "ui/buttons/buttonOutline";

export default function AnnotationSessionSelection() {
  const router = useRouter();

  const setAnnotationSession = async (annotationTotalCount) => {
    const annotationResponse = await fetch("/api/annotationGet", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(annotationTotalCount),
    });
    const annotationJson = await annotationResponse.json();
    window.localStorage.setItem(
      "annotationTotalCount",
      JSON.stringify(annotationTotalCount)
    );
    window.localStorage.setItem("annotationCurrentCount", JSON.stringify(1));
    window.localStorage.setItem(
      "annotationSetData",
      JSON.stringify(annotationJson)
    );

    router.reload(window.location.pathname);
  };

  return (
    <section className="container px-5 mx-auto">
      <section className="pb-12 mt-12">
        <div className="flex flex-col border px-12 py-12 my-5 rounded-md shadow-xl mb-64">
          <H2>How many annotations do you want to do for this session?</H2>
          <hr className="mt-4" />
          <div className="flex flex-wrap justify-center">
            <div className="px-4 mt-4">
              <OutlineButton
                className="hover:text-white hover:bg-gray-800 text-5xl shadow-md"
                onClick={() => setAnnotationSession(5)}
              >
                05
              </OutlineButton>
            </div>
            <div className="px-4 mt-4">
              <OutlineButton
                className="hover:text-white hover:bg-gray-800 text-5xl shadow-md"
                onClick={() => setAnnotationSession(10)}
              >
                10
              </OutlineButton>
            </div>
            <div className="px-4 mt-4">
              <OutlineButton
                className="hover:text-white hover:bg-gray-800 text-5xl shadow-md"
                onClick={() => setAnnotationSession(15)}
              >
                15
              </OutlineButton>
            </div>
            <div className="px-4 mt-4">
              <OutlineButton
                className="hover:text-white hover:bg-gray-800 text-5xl shadow-md"
                onClick={() => setAnnotationSession(20)}
              >
                20
              </OutlineButton>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
