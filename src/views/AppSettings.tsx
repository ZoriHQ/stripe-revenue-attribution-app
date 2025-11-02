import {
  Box,
  Icon,
  Inline,
  Link,
  SettingsView,
} from "@stripe/ui-extension-sdk/ui";
import type { ExtensionContextValue } from "@stripe/ui-extension-sdk/context";

const AppSettings = ({userContext, environment}: ExtensionContextValue) => {
  return (
    <SettingsView onSave={()=>{}}>
      <Box
        css={{
          borderRadius: "medium",
          padding: "large",
          stack: "y",
          rowGap: "large"
        }}>
        <Box>
          <Box css={{ font: "heading", marginBottom: "small" }}>
            ZoriHQ Settings
          </Box>
          <Box css={{ color: "secondary" }}>
            Manage your revenue attribution platform configuration
          </Box>
        </Box>

        <Box
          css={{
            borderRadius: "medium",
            padding: "medium",
          }}>
          <Box css={{ font: "subheading", marginBottom: "small" }}>
            Connection Status
          </Box>
          <Box css={{ color: "success", marginBottom: "small" }}>
            <Icon name="check" size="small" /> Connected to ZoriHQ
          </Box>
          <Box css={{ color: "secondary", font: "caption" }}>
            Your Stripe account is successfully linked to ZoriHQ platform
          </Box>
        </Box>

        <Box
          css={{
            borderRadius: "medium",
            padding: "medium",
          }}>
          <Box css={{ font: "subheading", marginBottom: "small" }}>
            Data Sync
          </Box>
          <Box css={{ marginBottom: "small" }}>
            ZoriHQ automatically tracks:
          </Box>
          <Box css={{ paddingLeft: "medium", color: "secondary" }}>
            • Customer data and metadata{"\n"}
            • Subscription events{"\n"}
            • Transaction history{"\n"}
            • Revenue metrics
          </Box>
        </Box>

        <Link
          target="_blank"
          href={"https://app.zorihq.com"}
        >
          <Box css={{ marginTop: "medium" }}>
            Visit ZoriHQ Dashboard{" "}
            <Icon name="arrowRight" size="xsmall" />
          </Box>
        </Link>
      </Box>
    </SettingsView>
  );
};

export default AppSettings;
