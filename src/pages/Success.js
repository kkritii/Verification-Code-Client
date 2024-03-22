import { Link, useSearchParams } from "react-router-dom";

import CheckCircle from "../components/CheckCircle";

export default function SuccessPage() {
  const [searchParams] = useSearchParams();

  return (
    <div className="text-center">
      <CheckCircle />
      <h2 className="mt-half mb-2">Success!</h2>
      <div className="text-md">
        Verification Successful: Code "<i>{searchParams.get('code')}</i>" Verified
      </div>
      <Link to="/" className="btn">Okay</Link>
    </div>
  );
}
