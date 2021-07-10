import Page from '@/ui/page';
import H1 from 'ui/heading/h1';
import H2 from 'ui/heading/h2';
import H3 from 'ui/heading/h3';
import P from 'ui/heading/p';

export default function Index() {
    return (
        <Page
            title="Privacy Policy - Atlas"
            description="This is our privacy policy for using Atlas."
            contribute={false}
        >
            <section className='container mx-auto px-5'>
                <H1> Privacy Policy </H1>
                <br />
                <H2> heading </H2>
                <P> this our privacy policy. etc etc.</P>
                <br />
            </section>
        </Page>
    );
}
