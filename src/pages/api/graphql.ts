import { requestHandler } from "../../lib/postgraphile";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default requestHandler;
