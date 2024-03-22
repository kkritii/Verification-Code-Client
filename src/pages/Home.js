import VerificationForm from "../components/VerificationForm";

const InputLength = 6;

function Home() {
  return (
    <div>
      <h1 className="text-center mb-2">Verification Code</h1>
      <VerificationForm inputLength={InputLength} />
    </div>
  );
}

export default Home;
