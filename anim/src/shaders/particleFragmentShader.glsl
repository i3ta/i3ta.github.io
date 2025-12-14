precision highp float;

varying float vModelZ;

void main() {
    // vec3 cyan = vec3(0.06666666666666667, 0.6, 0.5568627450980392);
    // vec3 green = vec3(0, 0.9490196078431372, 0.3764705882352941);
    vec3 cyan = vec3(0.0, 1.0, 1.0);
    vec3 green = vec3(0.0, 1.0, 0.2);

    float zFactor = smoothstep(-5.0, 5.0, vModelZ);
    vec3 finalColor = mix(cyan, green, zFactor);
    gl_FragColor = vec4(finalColor, 1.0);
}
