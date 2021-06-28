import P from 'ui/heading/p';
import HelpItem from './helpItem';

export default function HelpDirectory() {
  return (
    <section className="shadow container mx-auto my-12">
      <HelpItem heading="Starting a new Annotation Session">
        <div className="flex flex-col md:flex-row">
          <div className="w-1/3 mr-2 bg-red-600">
            Gif
          </div>
          <div className="">
            <P>
              You can rate the accessibility of the sidewalk by using the
              slider on the annotation page. Atlas uses a 10 point system
              in determining the accessibility of a sidewalk. 1 for least
              accessible and 10 for most accessible. The score you provide
              can be influenced by 2 factors. Obstructions on sidewalks and
              sidewalk width.
            </P>
          </div>
        </div>
      </HelpItem>
      <HelpItem heading="Rating Sidewalk Accessibility">
        <div>
          <P>
            You can rate the accessibility of the sidewalk by using the slider on
            the annotation page. Atlas uses a 10 point system in determining the accessibility
            of a sidewalk. 1 for least accessible and 10 for most accessible. The score you provide
            can be influenced by 2 factors. Obstructions on sidewalks and sidewalk width.
          </P>
        </div>
      </HelpItem>
      <HelpItem heading="Classifying Obstructions">
        <div>
          <P>
            You can rate the accessibility of the sidewalk by using the
            slider on the annotation page. Atlas uses a 10 point system
            in determining the accessibility of a sidewalk. 1 for least
            accessible and 10 for most accessible. The score you provide
            can be influenced by 2 factors. Obstructions on sidewalks and
            sidewalk width.
          </P>
        </div>
      </HelpItem>
      <HelpItem heading="Labeling New Obstructions">
        <div>
          <P>
            You can rate the accessibility of the sidewalk by using the
            slider on the annotation page. Atlas uses a 10 point system
            in determining the accessibility of a sidewalk. 1 for least
            accessible and 10 for most accessible. The score you provide
            can be influenced by 2 factors. Obstructions on sidewalks and
            sidewalk width.
          </P>
        </div>
      </HelpItem>
      <HelpItem heading="Determining Surface Type">
        <div>
          <P>
            You can rate the accessibility of the sidewalk by using the
            slider on the annotation page. Atlas uses a 10 point system
            in determining the accessibility of a sidewalk. 1 for least
            accessible and 10 for most accessible. The score you provide
            can be influenced by 2 factors. Obstructions on sidewalks and
            sidewalk width.
          </P>
        </div>
      </HelpItem>
    </section>
  );
}
