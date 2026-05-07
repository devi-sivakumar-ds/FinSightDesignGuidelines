"use client";

import { useMemo, useState } from "react";
import { websiteContent } from "@/content/websiteContent";

type SimulatorTask = (typeof websiteContent.simulator.tasks)[number];
type FlowKind = "current" | "finsight";

const flowLabels: Record<FlowKind, string> = {
  current: "Current banking",
  finsight: "FinSight"
};

export function BankingFlowSimulator() {
  const { simulator } = websiteContent;
  const [selectedTaskId, setSelectedTaskId] = useState<SimulatorTask["id"]>(
    simulator.tasks[0].id
  );
  const [activeStep, setActiveStep] = useState(0);

  const selectedTask = useMemo(
    () => simulator.tasks.find((task) => task.id === selectedTaskId) ?? simulator.tasks[0],
    [selectedTaskId, simulator.tasks]
  );

  const longestFlowLength = Math.max(
    selectedTask.currentSteps.length,
    selectedTask.finsightSteps.length
  );
  const boundedActiveStep = Math.min(activeStep, longestFlowLength - 1);

  function selectTask(taskId: SimulatorTask["id"]) {
    setSelectedTaskId(taskId);
    setActiveStep(0);
  }

  function moveStep(direction: "previous" | "next") {
    setActiveStep((step) => {
      if (direction === "previous") {
        return Math.max(0, step - 1);
      }

      return Math.min(longestFlowLength - 1, step + 1);
    });
  }

  return (
    <div className="space-y-5">
      <div aria-label="Choose a banking task to simulate" className="flex flex-wrap gap-3" role="group">
        {simulator.tasks.map((task) => {
          const isSelected = task.id === selectedTask.id;

          return (
            <button
              aria-pressed={isSelected}
              className={`min-h-11 rounded-md border px-4 py-2 text-[18px] font-bold transition ${
                isSelected
                  ? "border-[var(--blue-50)] bg-[var(--blue-50)] text-black"
                  : "border-white/15 bg-[var(--surface)] text-white hover:border-[var(--blue-50)]"
              }`}
              key={task.id}
              onClick={() => selectTask(task.id)}
              type="button"
            >
              {task.label}
            </button>
          );
        })}
      </div>

      <div className="grid gap-4 lg:grid-cols-[1fr_1fr]" aria-live="polite">
        <FlowPanel
          count={selectedTask.currentCount}
          flow="current"
          stepIndex={boundedActiveStep}
          steps={selectedTask.currentSteps}
          summary={selectedTask.currentSummary}
        />
        <FlowPanel
          count={selectedTask.finsightCount}
          flow="finsight"
          stepIndex={boundedActiveStep}
          steps={selectedTask.finsightSteps}
          summary={selectedTask.finsightSummary}
        />
      </div>

      <div className="flex flex-col gap-4 border border-white/10 bg-[rgba(255,255,255,0.04)] p-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[19px] font-semibold text-white">
          Step {boundedActiveStep + 1} of {longestFlowLength}
        </p>
        <div className="flex flex-wrap gap-3">
          <button
            className="min-h-11 rounded-md border border-white/20 px-4 py-2 text-[18px] font-bold text-white disabled:cursor-not-allowed disabled:opacity-45"
            disabled={boundedActiveStep === 0}
            onClick={() => moveStep("previous")}
            type="button"
          >
            Previous step
          </button>
          <button
            className="min-h-11 rounded-md bg-[var(--green-50)] px-4 py-2 text-[18px] font-bold text-black disabled:cursor-not-allowed disabled:opacity-45"
            disabled={boundedActiveStep === longestFlowLength - 1}
            onClick={() => moveStep("next")}
            type="button"
          >
            Next step
          </button>
        </div>
      </div>
    </div>
  );
}

function FlowPanel({
  count,
  flow,
  stepIndex,
  steps,
  summary
}: {
  count: string;
  flow: FlowKind;
  stepIndex: number;
  steps: readonly string[];
  summary: string;
}) {
  const displayStep = Math.min(stepIndex + 1, steps.length);
  const currentStep = steps[stepIndex];
  const isCurrentBanking = flow === "current";
  const progressLabel = isCurrentBanking
    ? `Swipe ${displayStep} of ${steps.length}`
    : `Guided step ${displayStep} of ${steps.length}`;

  return (
    <article className="border border-white/10 bg-[var(--surface)]">
      <div
        className={`border-t-4 p-4 ${
          isCurrentBanking ? "border-[var(--orange-50)]" : "border-[var(--green-50)]"
        }`}
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h3 className="text-[24px] font-bold text-white">{flowLabels[flow]}</h3>
            <p className="mt-2 text-[18px] leading-[1.55] text-[var(--text-secondary)]">
              {summary}
            </p>
          </div>
          <p
            className={`w-fit border-l-4 px-3 py-2 text-[19px] font-bold ${
              isCurrentBanking
                ? "border-[var(--orange-50)] bg-[var(--orange-600)] text-[var(--orange-50)]"
                : "border-[var(--green-50)] bg-[var(--green-600)] text-[var(--green-50)]"
            }`}
          >
            {count}
          </p>
        </div>

        <div className="mt-5 mx-auto max-w-[23rem] rounded-[2rem] border border-white/15 bg-black p-3 shadow-xl shadow-black/30">
          <div className="min-h-[27rem] rounded-[1.4rem] border border-white/10 bg-[#0c0c0c] p-4">
            <div className="mx-auto mb-4 h-1.5 w-16 rounded-full bg-white/20" aria-hidden="true" />

            <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-3">
              <p className="text-[18px] font-bold text-white">{flowLabels[flow]}</p>
              <p
                className={`text-[18px] font-bold ${
                  isCurrentBanking ? "text-[var(--orange-50)]" : "text-[var(--green-50)]"
                }`}
              >
                {progressLabel}
              </p>
            </div>

            <div className="mt-4">
              <p className="text-[18px] font-bold text-[var(--blue-50)]">
                {currentStep ? "Active transcript" : "Flow completed"}
              </p>
              <p className="mt-3 min-h-24 text-[22px] font-semibold leading-[1.45] text-white">
                {currentStep ?? "No more steps in this flow."}
              </p>
            </div>

            <div
              aria-hidden="true"
              className={`mt-5 h-2 overflow-hidden rounded-full bg-white/10`}
            >
              <div
                className={`h-full ${
                  isCurrentBanking ? "bg-[var(--orange-50)]" : "bg-[var(--green-50)]"
                }`}
                style={{ width: `${Math.min((displayStep / steps.length) * 100, 100)}%` }}
              />
            </div>
          </div>
        </div>

        <ol className="mt-4 space-y-2" aria-label={`${flowLabels[flow]} transcript steps`}>
          {steps.map((step, index) => {
            const isActive = index === stepIndex;

            return (
              <li
                aria-current={isActive ? "step" : undefined}
                className={`border-l-4 px-3 py-2 text-[18px] leading-[1.5] ${
                  isActive
                    ? "border-[var(--blue-50)] bg-[var(--blue-600)] text-white"
                    : "border-white/15 bg-[rgba(255,255,255,0.03)] text-[var(--text-secondary)]"
                }`}
                key={`${flow}-${step}`}
              >
                <span className="font-bold">Step {index + 1}: </span>
                {step}
              </li>
            );
          })}
        </ol>
      </div>
    </article>
  );
}
