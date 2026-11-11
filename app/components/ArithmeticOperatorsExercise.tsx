'use client';

import React from 'react';
import RunnablePythonCode from './RunnablePythonCode'; // Adjust path if necessary
import StorageScaleDialog from './StorageScaleDialog';

export default function ArithmeticOperatorsExercise() {

    // Define the exact outputs we expect from the Python code
    const quiz1Output = `The average prediction accuracy over the last three months is 87.67%`;

    const quiz2Output = `Total storage needed: 1750.00 MB\nStorage left after storing all images: 298.00 MB`;

    return (
        <div>

            {/* Quiz 1 */}
            <div className="space-y-3">
                <h3 className="font-bold text-white text-base"> Quiz 1: Evaluating Model Performance</h3>
                <p className="text-slate-400 text-xs">
                    Scenario: We analyze the average prediction accuracy of a machine learning model over the last three months (85.5%, 90.2%, and 87.3%).
                </p>

                <RunnablePythonCode
                    code={`# Accuracy scores for the last three months
accuracy_scores = [85.5, 90.2, 87.3]

# Calculate the average accuracy
average_accuracy = sum(accuracy_scores) / len(accuracy_scores)

print(f"The average prediction accuracy over the last three months is {average_accuracy:.2f}%")`}
                    output={quiz1Output}
                />
            </div>

            <hr className="border-slate-800" />
            <br />

            {/* Quiz 2 */}
            <div className="space-y-3">
                <h3 className="font-bold text-white text-base"> Quiz 2: Managing Data Storage for Machine Learning Projects</h3>

                <p className="text-slate-400 text-xs">
                    Scenario: Dataset 1 has 4000 images, Dataset 2 has 3000 images. Each image is 256KB. New device capacity is 2048MB.
                </p>
                
                <div className="flex justify-end mt-2">
                    <StorageScaleDialog />
                </div>

                <RunnablePythonCode
                    code={`# Sizes of datasets (in images) and image size in KB
dataset1_size = 4000
dataset2_size = 3000
image_size_kb = 256

# Calculate total storage needed (in KB and MB)
total_storage_kb = (dataset1_size + dataset2_size) * image_size_kb
total_storage_mb = total_storage_kb / 1024
print(f"Total storage needed: {total_storage_mb:.2f} MB")

# Device capacity and leftover storage calculation
device_capacity_mb = 2048
leftover_storage_mb = device_capacity_mb - total_storage_mb
print(f"Storage left after storing all images: {leftover_storage_mb:.2f} MB")`}
                    output={quiz2Output}
                />
            </div>
        </div>
    );
}