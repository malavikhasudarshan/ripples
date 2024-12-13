# Pose-Driven Interactive Water Ripples  

A creative, interactive visual project using **ML5.js** and **p5.js** to simulate dynamic water ripples based on human motion detection. This program detects keypoints from a live camera feed, generates ripples where motion is detected, and overlays them on a flowing, water-like background with a pixelated, noise-driven effect.

## Features  
- **Real-Time Pose Detection**: Utilizes the **ML5.js** `bodyPose` model to track body keypoints with confidence thresholds.  
- **Dynamic Ripple Effects**: Ripples appear at detected keypoint positions and fade away after 10 seconds.  
- **Flowing Water Background**: A noise-driven animation mimics the appearance of flowing water.  
- **Sound Integration**: (Optional) Plink sounds or background water ambiance can be added for immersive interaction. (Personal To-Do)

## Technologies  
- **ML5.js**: For real-time human pose detection using the `bodyPose` model.  
- **p5.js**: For interactive visuals, animation, and drawing the water ripples and background.  
- **JavaScript**: Core logic for handling pose detection, ripple timing, and dynamic rendering.  

## How It Works  
1. **Pose Detection**:  
   - A live video feed is captured using `p5.Video`.  
   - The `bodyPose` model identifies keypoints of the body (e.g, eyes, hands, elbows, knees).  
2. **Ripple Generation**:  
   - When keypoints exceed a confidence threshold, a ripple effect is generated at the corresponding location.  
   - Ripples grow and fade over time, disappearing after 10 seconds.  
3. **Water Background**:  
   - A noise-based color grid creates a dynamic, flowing water effect as the backdrop.  

## Setup and Installation  
1. Clone this repository:  
   ```bash
   git clone https://github.com/malavikhasudarshan/ripples.git
   cd ripples

## Demo
You can view the live demo of this project at:  
[https://malavikhasudarshan.github.io/ripples/](https://malavikhasudarshan.github.io/ripples/)
