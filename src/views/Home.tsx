import {
  Box,
  ContextView,
  Button,
  Icon,
} from "@stripe/ui-extension-sdk/ui";
import type { ExtensionContextValue } from "@stripe/ui-extension-sdk/context";

import BrandIcon from "./brand_icon.svg";

/**
 * This is a view that is rendered in the Stripe dashboard homepage.
 * In stripe-app.json, this view is configured with stripe.dashboard.home.overview viewport.
 * You can add a new view by running "stripe apps add view" from the CLI.
 */
const Home = ({ userContext, environment }: ExtensionContextValue) => {
  return (
    <ContextView
      title="ZoriHQ - Revenue Attribution"
      brandColor="#6366F1"
      brandIcon={BrandIcon}
    >
      <Box css={{
        stack: "y",
        rowGap: "large",
        alignX: "center",
        paddingTop: "xxlarge",
        paddingBottom: "xxlarge"
      }}>
        <Box css={{ alignX: "center" }}>
          <Box css={{ font: "heading", marginBottom: "medium" }}>
            Connected to Zori
          </Box>
          <Box css={{ color: "success", marginBottom: "xlarge" }}>
            <Icon name="check" size="large" /> Your Stripe account is connected
          </Box>
        </Box>

        <Button
          type="primary"
          href="https://app.zorihq.com"
          target="_blank"
        >
          Open Dashboard
          <Icon name="arrowRight" />
        </Button>

        <Box css={{ color: "secondary", font: "body", marginTop: "large" }}>
          View your revenue attribution analytics and insights on the ZoriHQ dashboard
        </Box>
      </Box>
    </ContextView>
  );
};

export default Home;
