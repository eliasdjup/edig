// client.js
import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "h3zfxe8b", // you can find this in sanity.json
  dataset: "production", // or the name you chose in step 1
  apiVersion: "2022-11-309",
  useCdn: true, // `false` if you want to ensure fresh data
});
