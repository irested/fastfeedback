/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
import { getAllFeedback, getAllSites } from '@/lib/db-admin';
import Feedback from '@/components/Feedback';
import { Box } from '@chakra-ui/layout';

export async function getStaticProps(context) {
  const { siteId } = context.params;
  const feedback = await getAllFeedback(siteId);
  return {
    props: {
      initialFeedback: feedback,
    },
  };
}

export async function getStaticPaths() {
  const sites = await getAllSites();
  const paths = sites.map((site) => ({
    params: {
      siteId: site.id.toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

const SiteFeedback = ({ initialFeedback }) => (
  <Box display="flex" flexDirection="column" width="full" maxWidth="700px" margin="0 auto">
    {initialFeedback.map((feedback) => (
      <Feedback key={feedback.id} {...feedback} />
    ))}
  </Box>
);

export default SiteFeedback;
