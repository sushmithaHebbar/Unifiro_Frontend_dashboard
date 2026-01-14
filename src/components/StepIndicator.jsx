export default function StepIndicator({ currentStep }) {
  return (
    <div className="flex justify-center gap-4 mb-8">
      {[1, 2, 3].map((step) => (
        <div
          key={step}
          className={`
            h-[6px] w-20 rounded-full transition-all duration-300
            ${
              step < currentStep
                ? "bg-gradient-to-r from-teal-400 to-lime-400"
                : step === currentStep
                ? "bg-gradient-to-r from-teal-400 to-lime-400"
                : "bg-gray-200"
            }
          `}
        />
      ))}
    </div>
  );
}
