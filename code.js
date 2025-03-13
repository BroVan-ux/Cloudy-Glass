"use strict";
/**
 * Cloudy Glass - Figma Glass Effect Plugin
 * ----------------------------------------
 *
 * A professional Figma plugin that provides various glass effect presets
 * for designers to easily apply to their UI elements. Supports multiple
 * design systems including iOS, macOS, visionOSWindows (Mica, Acrylic, Aero) and more.
 *
 * Created by: BroVan(Hui Fan)
 * Version: 1.0.0
 * Release Date: March 2025
 *
 * This plugin helps designers quickly apply complex glass/blur effects
 * with a single click, saving time and ensuring consistency across designs.
 *
 * © 2025 Hui Fan. All rights reserved.
 *
 * This code and the associated plugin are protected by copyright law.
 * Unauthorized reproduction or distribution may result in severe civil
 * and criminal penalties, and will be prosecuted to the maximum extent
 * possible under law.
 *
 * 🥚 Easter Egg: "Generate glass effect with one-click."
 * 🥚 Easter Egg: "If you can dream it, you can build it."
 *
 */
console.clear();
figma.showUI(__html__, { width: 400, height: 563 });
// 在插件初始化时确保发送选择状态
figma.once('run', () => {
    console.log('插件启动');
    updateSelectionState();
});
// 初始化选择状态检查
updateSelectionState();
// 彩蛋函数：显示彩蛋消息
function showEasterEgg(code) {
    figma.notify('🥚🌟-- YOU FIND IT! --🌟🥚', { timeout: 5000 });
}
// 检查当前选中的图层是否为矩形或框架
function isValidLayerType() {
    const selection = figma.currentPage.selection;
    if (selection.length === 0)
        return false;
    // 检查第一个选中的节点是否为矩形或框架
    const node = selection[0];
    return node.type === 'RECTANGLE' || node.type === 'FRAME';
}
// 更新选择状态
function updateSelectionState() {
    const selection = figma.currentPage.selection;
    const hasSelection = selection.length > 0;
    const validLayerType = isValidLayerType();
    // 如果选中了图层但类型无效，显示通知
    if (hasSelection && !validLayerType) {
        figma.notify('Please select 👉 a rectangle or Frame layer 👈 first');
    }
    // 向UI发送选择状态和图层类型信息
    figma.ui.postMessage({
        type: 'selection-status',
        hasSelection: hasSelection,
        isValidLayerType: validLayerType
    });
}
// 监听选择变化事件
figma.on('selectionchange', updateSelectionState);
// 在插件启动时初始化选择状态
updateSelectionState();
// 显示无选择警告的函数
function showNoSelectionWarning() {
    figma.notify('Please select 👉 a rectangle or Frame layer 👈 first', {
        timeout: 3000
    });
}
// iOS Ultra Thin 预设功能实现
function applyiOSUltraThinPreset() {
    const selection = figma.currentPage.selection;
    selection.forEach(node => {
        try {
            // 检查节点是否支持必要的属性
            if (!('fills' in node) || !('effects' in node)) {
                return;
            }
            // 设置默认亮色模式的填充
            node.fills = [
                {
                    type: 'SOLID',
                    color: { r: 191 / 255, g: 191 / 255, b: 191 / 255 }, // #BFBFBF
                    opacity: 0.44
                },
                {
                    type: 'SOLID',
                    color: { r: 13 / 255, g: 13 / 255, b: 13 / 255 }, // #0D0D0D
                    opacity: 1,
                    blendMode: 'COLOR_DODGE'
                }
            ];
            // 设置背景模糊
            node.effects = [
                {
                    type: 'BACKGROUND_BLUR',
                    visible: true,
                    radius: 20
                }
            ];
            // 设置圆角和圆角平滑度
            if ('cornerRadius' in node) {
                node.cornerRadius = 32; // 设置圆角为32
            }
            // 设置圆角平滑度
            if ('cornerSmoothing' in node) {
                node.cornerSmoothing = 0.6; // 设置圆角平滑度为60%
            }
        }
        catch (error) {
            console.error('应用预设时出错:', error);
            // 添加类型检查
            if (error instanceof Error) {
                figma.notify('应用预设时出错: ' + error.message);
            }
            else {
                figma.notify('应用预设时出错');
            }
        }
    });
}
// iOS Ultra Thin Dark 预设功能实现
function applyiOSUltraThinDarkPreset() {
    const selection = figma.currentPage.selection;
    selection.forEach(node => {
        try {
            // 检查节点是否支持必要的属性
            if (!('fills' in node) || !('effects' in node)) {
                return;
            }
            // 设置Dark模式的填充
            node.fills = [
                {
                    type: 'SOLID',
                    color: { r: 37 / 255, g: 37 / 255, b: 37 / 255 }, // #252525
                    opacity: 0.55
                },
                {
                    type: 'SOLID',
                    color: { r: 156 / 255, g: 156 / 255, b: 156 / 255 }, // #9C9C9C
                    opacity: 1,
                    blendMode: 'OVERLAY'
                }
            ];
            // 设置背景模糊
            node.effects = [
                {
                    type: 'BACKGROUND_BLUR',
                    visible: true,
                    radius: 50
                }
            ];
            // 设置圆角和圆角平滑度
            if ('cornerRadius' in node) {
                node.cornerRadius = 32; // 设置圆角为32
            }
            // 设置圆角平滑度
            if ('cornerSmoothing' in node) {
                node.cornerSmoothing = 0.6; // 设置圆角平滑度为60%
            }
        }
        catch (error) {
            console.error('应用预设时出错:', error);
            // 添加类型检查
            if (error instanceof Error) {
                figma.notify('应用预设时出错: ' + error.message);
            }
            else {
                figma.notify('应用预设时出错');
            }
        }
    });
}
// iOS Thin 预设功能实现
function applyiOSThinPreset() {
    const selection = figma.currentPage.selection;
    selection.forEach(node => {
        try {
            // 检查节点是否支持必要的属性
            if (!('fills' in node) || !('effects' in node)) {
                return;
            }
            // 设置亮色模式的填充
            node.fills = [
                {
                    type: 'SOLID',
                    color: { r: 166 / 255, g: 166 / 255, b: 166 / 255 }, // #A6A6A6
                    opacity: 0.7
                },
                {
                    type: 'SOLID',
                    color: { r: 51 / 255, g: 51 / 255, b: 51 / 255 }, // #333333
                    opacity: 1,
                    blendMode: 'COLOR_DODGE'
                }
            ];
            // 设置背景模糊
            node.effects = [
                {
                    type: 'BACKGROUND_BLUR',
                    visible: true,
                    radius: 35
                }
            ];
            // 设置圆角和圆角平滑度
            if ('cornerRadius' in node) {
                node.cornerRadius = 32; // 设置圆角为32
            }
            // 设置圆角平滑度
            if ('cornerSmoothing' in node) {
                node.cornerSmoothing = 0.6; // 设置圆角平滑度为60%
            }
        }
        catch (error) {
            console.error('应用预设时出错:', error);
            // 添加类型检查
            if (error instanceof Error) {
                figma.notify('应用预设时出错: ' + error.message);
            }
            else {
                figma.notify('应用预设时出错');
            }
        }
    });
}
// iOS Thin Dark 预设功能实现
function applyiOSThinDarkPreset() {
    const selection = figma.currentPage.selection;
    selection.forEach(node => {
        try {
            // 检查节点是否支持必要的属性
            if (!('fills' in node) || !('effects' in node)) {
                return;
            }
            // 设置Dark模式的填充
            node.fills = [
                {
                    type: 'SOLID',
                    color: { r: 37 / 255, g: 37 / 255, b: 37 / 255 }, // #252525
                    opacity: 0.7
                },
                {
                    type: 'SOLID',
                    color: { r: 156 / 255, g: 156 / 255, b: 156 / 255 }, // #9C9C9C
                    opacity: 1,
                    blendMode: 'OVERLAY'
                }
            ];
            // 设置背景模糊
            node.effects = [
                {
                    type: 'BACKGROUND_BLUR',
                    visible: true,
                    radius: 50
                }
            ];
            // 设置圆角和圆角平滑度
            if ('cornerRadius' in node) {
                node.cornerRadius = 32; // 设置圆角为32
            }
            // 设置圆角平滑度
            if ('cornerSmoothing' in node) {
                node.cornerSmoothing = 0.6; // 设置圆角平滑度为60%
            }
        }
        catch (error) {
            console.error('应用预设时出错:', error);
            // 添加类型检查
            if (error instanceof Error) {
                figma.notify('应用预设时出错: ' + error.message);
            }
            else {
                figma.notify('应用预设时出错');
            }
        }
    });
}
// iOS Regular 预设功能实现
function applyiOSRegularPreset() {
    const selection = figma.currentPage.selection;
    selection.forEach(node => {
        try {
            // 检查节点是否支持必要的属性
            if (!('fills' in node) || !('effects' in node)) {
                return;
            }
            // 设置亮色模式的填充
            node.fills = [
                {
                    type: 'SOLID',
                    color: { r: 179 / 255, g: 179 / 255, b: 179 / 255 }, // #B3B3B3
                    opacity: 0.82
                },
                {
                    type: 'SOLID',
                    color: { r: 56 / 255, g: 56 / 255, b: 56 / 255 }, // #383838
                    opacity: 1,
                    blendMode: 'COLOR_DODGE'
                }
            ];
            // 设置背景模糊
            node.effects = [
                {
                    type: 'BACKGROUND_BLUR',
                    visible: true,
                    radius: 35
                }
            ];
            // 设置圆角和圆角平滑度
            if ('cornerRadius' in node) {
                node.cornerRadius = 32; // 设置圆角为32
            }
            // 设置圆角平滑度
            if ('cornerSmoothing' in node) {
                node.cornerSmoothing = 0.6; // 设置圆角平滑度为60%
            }
        }
        catch (error) {
            console.error('应用预设时出错:', error);
            // 添加类型检查
            if (error instanceof Error) {
                figma.notify('应用预设时出错: ' + error.message);
            }
            else {
                figma.notify('应用预设时出错');
            }
        }
    });
}
// iOS Regular Dark 预设功能实现
function applyiOSRegularDarkPreset() {
    const selection = figma.currentPage.selection;
    selection.forEach(node => {
        try {
            // 检查节点是否支持必要的属性
            if (!('fills' in node) || !('effects' in node)) {
                return;
            }
            // 设置Dark模式的填充
            node.fills = [
                {
                    type: 'SOLID',
                    color: { r: 37 / 255, g: 37 / 255, b: 37 / 255 }, // #252525
                    opacity: 0.82
                },
                {
                    type: 'SOLID',
                    color: { r: 140 / 255, g: 140 / 255, b: 140 / 255 }, // #8C8C8C
                    opacity: 1,
                    blendMode: 'OVERLAY'
                }
            ];
            // 设置背景模糊
            node.effects = [
                {
                    type: 'BACKGROUND_BLUR',
                    visible: true,
                    radius: 50
                }
            ];
            // 设置圆角和圆角平滑度
            if ('cornerRadius' in node) {
                node.cornerRadius = 32; // 设置圆角为32
            }
            // 设置圆角平滑度
            if ('cornerSmoothing' in node) {
                node.cornerSmoothing = 0.6; // 设置圆角平滑度为60%
            }
        }
        catch (error) {
            console.error('应用预设时出错:', error);
            // 添加类型检查
            if (error instanceof Error) {
                figma.notify('应用预设时出错: ' + error.message);
            }
            else {
                figma.notify('应用预设时出错');
            }
        }
    });
}
// iOS Thick 预设功能实现
function applyiOSThickPreset() {
    const selection = figma.currentPage.selection;
    selection.forEach(node => {
        try {
            // 检查节点是否支持必要的属性
            if (!('fills' in node) || !('effects' in node)) {
                return;
            }
            // 设置亮色模式的填充
            node.fills = [
                {
                    type: 'SOLID',
                    color: { r: 153 / 255, g: 153 / 255, b: 153 / 255 }, // #999999
                    opacity: 0.97
                },
                {
                    type: 'SOLID',
                    color: { r: 92 / 255, g: 92 / 255, b: 92 / 255 }, // #5C5C5C
                    opacity: 1,
                    blendMode: 'COLOR_DODGE'
                }
            ];
            // 设置背景模糊
            node.effects = [
                {
                    type: 'BACKGROUND_BLUR',
                    visible: true,
                    radius: 35
                }
            ];
            // 设置圆角和圆角平滑度
            if ('cornerRadius' in node) {
                node.cornerRadius = 32; // 设置圆角为32
            }
            // 设置圆角平滑度
            if ('cornerSmoothing' in node) {
                node.cornerSmoothing = 0.6; // 设置圆角平滑度为60%
            }
        }
        catch (error) {
            console.error('应用预设时出错:', error);
            // 添加类型检查
            if (error instanceof Error) {
                figma.notify('应用预设时出错: ' + error.message);
            }
            else {
                figma.notify('应用预设时出错');
            }
        }
    });
}
// iOS Thick Dark 预设功能实现
function applyiOSThickDarkPreset() {
    const selection = figma.currentPage.selection;
    selection.forEach(node => {
        try {
            // 检查节点是否支持必要的属性
            if (!('fills' in node) || !('effects' in node)) {
                return;
            }
            // 设置Dark模式的填充
            node.fills = [
                {
                    type: 'SOLID',
                    color: { r: 37 / 255, g: 37 / 255, b: 37 / 255 }, // #252525
                    opacity: 0.9
                },
                {
                    type: 'SOLID',
                    color: { r: 124 / 255, g: 124 / 255, b: 124 / 255 }, // #7C7C7C
                    opacity: 1,
                    blendMode: 'OVERLAY'
                }
            ];
            // 设置背景模糊
            node.effects = [
                {
                    type: 'BACKGROUND_BLUR',
                    visible: true,
                    radius: 50
                }
            ];
            // 设置圆角和圆角平滑度
            if ('cornerRadius' in node) {
                node.cornerRadius = 32; // 设置圆角为32
            }
            // 设置圆角平滑度
            if ('cornerSmoothing' in node) {
                node.cornerSmoothing = 0.6; // 设置圆角平滑度为60%
            }
        }
        catch (error) {
            console.error('应用预设时出错:', error);
            // 添加类型检查
            if (error instanceof Error) {
                figma.notify('应用预设时出错: ' + error.message);
            }
            else {
                figma.notify('应用预设时出错');
            }
        }
    });
}
// iOS Chrome 预设功能实现
function applyiOSChromePreset() {
    const selection = figma.currentPage.selection;
    selection.forEach(node => {
        try {
            // 检查节点是否支持必要的属性
            if (!('fills' in node) || !('effects' in node)) {
                return;
            }
            // 设置亮色模式的填充 - 仅一层
            node.fills = [
                {
                    type: 'SOLID',
                    color: { r: 255 / 255, g: 255 / 255, b: 255 / 255 }, // #FFFFFF
                    opacity: 0.75,
                    blendMode: 'HARD_LIGHT'
                }
            ];
            // 设置背景模糊
            node.effects = [
                {
                    type: 'BACKGROUND_BLUR',
                    visible: true,
                    radius: 35
                }
            ];
            // 设置圆角和圆角平滑度
            if ('cornerRadius' in node) {
                node.cornerRadius = 32; // 设置圆角为32
            }
            // 设置圆角平滑度
            if ('cornerSmoothing' in node) {
                node.cornerSmoothing = 0.6; // 设置圆角平滑度为60%
            }
        }
        catch (error) {
            console.error('应用预设时出错:', error);
            // 添加类型检查
            if (error instanceof Error) {
                figma.notify('应用预设时出错: ' + error.message);
            }
            else {
                figma.notify('应用预设时出错');
            }
        }
    });
}
// iOS Chrome Dark 预设功能实现
function applyiOSChromeDarkPreset() {
    const selection = figma.currentPage.selection;
    selection.forEach(node => {
        try {
            // 检查节点是否支持必要的属性
            if (!('fills' in node) || !('effects' in node)) {
                return;
            }
            // 设置Dark模式的填充
            node.fills = [
                {
                    type: 'SOLID',
                    color: { r: 28 / 255, g: 28 / 255, b: 28 / 255 }, // #1C1C1C
                    opacity: 0.9
                },
                {
                    type: 'SOLID',
                    color: { r: 124 / 255, g: 124 / 255, b: 124 / 255 }, // #7C7C7C
                    opacity: 1,
                    blendMode: 'OVERLAY'
                }
            ];
            // 设置背景模糊
            node.effects = [
                {
                    type: 'BACKGROUND_BLUR',
                    visible: true,
                    radius: 50
                }
            ];
            // 设置圆角和圆角平滑度
            if ('cornerRadius' in node) {
                node.cornerRadius = 32; // 设置圆角为32
            }
            // 设置圆角平滑度
            if ('cornerSmoothing' in node) {
                node.cornerSmoothing = 0.6; // 设置圆角平滑度为60%
            }
        }
        catch (error) {
            console.error('应用预设时出错:', error);
            // 添加类型检查
            if (error instanceof Error) {
                figma.notify('应用预设时出错: ' + error.message);
            }
            else {
                figma.notify('应用预设时出错');
            }
        }
    });
}
// visionOS 预设功能实现
function applyVisionOSPreset() {
    const selection = figma.currentPage.selection;
    selection.forEach(node => {
        try {
            // 检查节点是否支持必要的属性
            if (!('fills' in node) || !('effects' in node)) {
                return;
            }
            // 设置填充 - 仅一层
            node.fills = [
                {
                    type: 'SOLID',
                    color: { r: 128 / 255, g: 128 / 255, b: 128 / 255 }, // #808080
                    opacity: 0.3,
                    blendMode: 'LUMINOSITY'
                }
            ];
            // 设置背景模糊
            node.effects = [
                {
                    type: 'BACKGROUND_BLUR',
                    visible: true,
                    radius: 70
                }
            ];
            // 设置内描边
            node.strokeWeight = 0.7;
            node.strokeAlign = 'INSIDE';
            // 设置渐变描边
            node.strokes = [
                {
                    type: 'GRADIENT_LINEAR',
                    gradientStops: [
                        { position: 0, color: { r: 1, g: 1, b: 1, a: 0.4 } }, // #FFFFFF 40%
                        { position: 0.41, color: { r: 1, g: 1, b: 1, a: 0 } }, // #FFFFFF 0%
                        { position: 0.57, color: { r: 1, g: 1, b: 1, a: 0 } }, // #FFFFFF 0%
                        { position: 1, color: { r: 1, g: 1, b: 1, a: 0.1 } } // #FFFFFF 10%
                    ],
                    gradientTransform: [
                        [0, 1, 0], // 水平缩放，水平倾斜 ，中心在左上
                        [-1, 0.6, 0.6] // 垂直倾斜，垂直缩放，中心在右上
                    ]
                }
            ];
            // 设置圆角和圆角平滑度
            if ('cornerRadius' in node) {
                node.cornerRadius = 32; // 设置圆角为32
            }
            // 设置圆角平滑度
            if ('cornerSmoothing' in node) {
                node.cornerSmoothing = 0.6; // 设置圆角平滑度为60%
            }
        }
        catch (error) {
            console.error('应用预设时出错:', error);
            // 添加类型检查
            if (error instanceof Error) {
                figma.notify('应用预设时出错: ' + error.message);
            }
            else {
                figma.notify('应用预设时出错');
            }
        }
    });
}
// tvOS 预设功能实现
function applyTvOSPreset() {
    const selection = figma.currentPage.selection;
    selection.forEach(node => {
        try {
            // 检查节点是否支持必要的属性
            if (!('fills' in node) || !('effects' in node)) {
                return;
            }
            // 清除描边（如果之前有设置）
            node.strokes = [];
            // 设置填充 - 仅一层
            node.fills = [
                {
                    type: 'SOLID',
                    color: { r: 254 / 255, g: 253 / 255, b: 255 / 255 }, // #FEFDFF
                    opacity: 0.5
                }
            ];
            // 设置背景模糊
            node.effects = [
                {
                    type: 'BACKGROUND_BLUR',
                    visible: true,
                    radius: 135
                }
            ];
            // 设置圆角和圆角平滑度
            if ('cornerRadius' in node) {
                node.cornerRadius = 32; // 设置圆角为32
            }
            // 设置圆角平滑度
            if ('cornerSmoothing' in node) {
                node.cornerSmoothing = 0.6; // 设置圆角平滑度为60%
            }
        }
        catch (error) {
            console.error('应用预设时出错:', error);
            // 添加类型检查
            if (error instanceof Error) {
                figma.notify('应用预设时出错: ' + error.message);
            }
            else {
                figma.notify('应用预设时出错');
            }
        }
    });
}
// tvOS Dark 预设功能实现
function applyTvOSDarkPreset() {
    const selection = figma.currentPage.selection;
    selection.forEach(node => {
        try {
            // 检查节点是否支持必要的属性
            if (!('fills' in node) || !('effects' in node)) {
                return;
            }
            // 清除描边（如果之前有设置）
            node.strokes = [];
            // 设置填充 - 仅一层
            node.fills = [
                {
                    type: 'SOLID',
                    color: { r: 30 / 255, g: 30 / 255, b: 30 / 255 }, // #1E1E1E
                    opacity: 0.5
                }
            ];
            // 设置背景模糊
            node.effects = [
                {
                    type: 'BACKGROUND_BLUR',
                    visible: true,
                    radius: 135
                }
            ];
            // 设置圆角和圆角平滑度
            if ('cornerRadius' in node) {
                node.cornerRadius = 32; // 设置圆角为32
            }
            // 设置圆角平滑度
            if ('cornerSmoothing' in node) {
                node.cornerSmoothing = 0.6; // 设置圆角平滑度为60%
            }
        }
        catch (error) {
            console.error('应用预设时出错:', error);
            // 添加类型检查
            if (error instanceof Error) {
                figma.notify('应用预设时出错: ' + error.message);
            }
            else {
                figma.notify('应用预设时出错');
            }
        }
    });
}
// macOS 预设功能实现
function applyMacOSPreset() {
    const selection = figma.currentPage.selection;
    selection.forEach(node => {
        try {
            // 检查节点是否支持必要的属性
            if (!('fills' in node) || !('effects' in node)) {
                return;
            }
            // 清除描边（如果之前有设置）
            node.strokes = [];
            // 设置填充 - 仅一层
            node.fills = [
                {
                    type: 'SOLID',
                    color: { r: 246 / 255, g: 246 / 255, b: 246 / 255 }, // #F6F6F6
                    opacity: 0.6
                }
            ];
            // 设置背景模糊
            node.effects = [
                {
                    type: 'BACKGROUND_BLUR',
                    visible: true,
                    radius: 82
                }
            ];
            // 设置圆角和圆角平滑度
            if ('cornerRadius' in node) {
                node.cornerRadius = 32; // 设置圆角为32
            }
            // 设置圆角平滑度
            if ('cornerSmoothing' in node) {
                node.cornerSmoothing = 0.6; // 设置圆角平滑度为60%
            }
        }
        catch (error) {
            console.error('应用预设时出错:', error);
            // 添加类型检查
            if (error instanceof Error) {
                figma.notify('应用预设时出错: ' + error.message);
            }
            else {
                figma.notify('应用预设时出错');
            }
        }
    });
}
// macOS Dark 预设功能实现
function applyMacOSDarkPreset() {
    const selection = figma.currentPage.selection;
    selection.forEach(node => {
        try {
            // 检查节点是否支持必要的属性
            if (!('fills' in node) || !('effects' in node)) {
                return;
            }
            // 清除描边（如果之前有设置）
            node.strokes = [];
            // 设置填充 - 仅一层
            node.fills = [
                {
                    type: 'SOLID',
                    color: { r: 40 / 255, g: 40 / 255, b: 40 / 255 }, // #282828
                    opacity: 0.6
                }
            ];
            // 设置背景模糊
            node.effects = [
                {
                    type: 'BACKGROUND_BLUR',
                    visible: true,
                    radius: 82
                }
            ];
            // 设置圆角和圆角平滑度
            if ('cornerRadius' in node) {
                node.cornerRadius = 32; // 设置圆角为32
            }
            // 设置圆角平滑度
            if ('cornerSmoothing' in node) {
                node.cornerSmoothing = 0.6; // 设置圆角平滑度为60%
            }
        }
        catch (error) {
            console.error('应用预设时出错:', error);
            // 添加类型检查
            if (error instanceof Error) {
                figma.notify('应用预设时出错: ' + error.message);
            }
            else {
                figma.notify('应用预设时出错');
            }
        }
    });
}
// Microsoft AcrylicThin 预设功能实现
function applyMsftAcrylicThinPreset() {
    const selection = figma.currentPage.selection;
    selection.forEach(node => {
        try {
            // 检查节点是否支持必要的属性
            if (!('fills' in node) || !('effects' in node)) {
                return;
            }
            // 清除描边（如果之前有设置）
            node.strokes = [];
            // 添加边框
            node.strokeWeight = 1;
            node.strokeAlign = 'INSIDE';
            node.strokes = [
                {
                    type: 'SOLID',
                    color: { r: 117 / 255, g: 117 / 255, b: 117 / 255 }, // #757575
                    opacity: 0.4
                }
            ];
            // 创建并添加噪点图像
            // 注意：这里使用的是一个示例base64字符串，你需要替换为实际的dry_point图像的base64数据
            const noiseImageData = "iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADESURBVHgB7ZdBCsIwEEXzxbpwIbgQvJLn8BQewbN4Ci/hEVwLLgRXIvnQDGSMbUJNOgXnw4CYxXt/GpIQGAwGg+GfKVF3OGfH5ll+FjnqHhXqAYrQAIXQBIXQCIXQDIXQcBZaYCFUCaAQqgRQCFUCKIQqARRClQAKoUoAhdAHVLiP+CIesIIjbPAZ8K6Ld7fwVcAedrDGZ8S7Lt7dwU8BNzhAA1t4wRnvunh3D38FXOEILezhhHddvHuCwWAwGAyGP+YNT4gKbYYsKWoAAAAASUVORK5CYII=";
            // 将base64字符串转换为Uint8Array
            const imageBytes = figma.base64Decode(noiseImageData);
            // 创建图像
            const noiseImage = figma.createImage(imageBytes);
            // 设置填充 - 三层，包括噪点图像
            node.fills = [
                {
                    type: 'SOLID',
                    color: { r: 211 / 255, g: 211 / 255, b: 211 / 255 }, // #D3D3D3
                    opacity: 0.44,
                    blendMode: 'LUMINOSITY'
                },
                {
                    type: 'SOLID',
                    color: { r: 211 / 255, g: 211 / 255, b: 211 / 255 }, // #D3D3D3
                    opacity: 0,
                    blendMode: 'COLOR'
                },
                {
                    type: 'IMAGE',
                    scaleMode: 'TILE',
                    imageHash: noiseImage.hash,
                    opacity: 0.02 // 2%透明度
                }
            ];
            // 设置背景模糊
            node.effects = [
                {
                    type: 'BACKGROUND_BLUR',
                    visible: true,
                    radius: 60
                }
            ];
            // 设置圆角和圆角平滑度
            if ('cornerRadius' in node) {
                node.cornerRadius = 7; // 设置圆角为7
            }
            // 设置圆角平滑度
            if ('cornerSmoothing' in node) {
                node.cornerSmoothing = 0.6; // 设置圆角平滑度为60%
            }
            // 设置阴影
            node.effects = [
                ...node.effects,
                {
                    type: 'DROP_SHADOW',
                    visible: true,
                    color: { r: 0, g: 0, b: 0, a: 0.15 },
                    offset: { x: 0, y: 2 },
                    radius: 21,
                    spread: 0,
                    blendMode: 'NORMAL'
                },
                {
                    type: 'DROP_SHADOW',
                    visible: true,
                    color: { r: 0, g: 0, b: 0, a: 0.19 },
                    offset: { x: 0, y: 32 },
                    radius: 64,
                    spread: 0,
                    blendMode: 'NORMAL'
                }
            ];
        }
        catch (error) {
            console.error('应用预设时出错:', error);
            // 添加类型检查
            if (error instanceof Error) {
                figma.notify('应用预设时出错: ' + error.message);
            }
            else {
                figma.notify('应用预设时出错');
            }
        }
    });
}
// Microsoft AcrylicBase 预设功能实现
function applyMsftAcrylicBasePreset() {
    const selection = figma.currentPage.selection;
    selection.forEach(node => {
        try {
            // 检查节点是否支持必要的属性
            if (!('fills' in node) || !('effects' in node)) {
                return;
            }
            // 清除描边（如果之前有设置）
            node.strokes = [];
            // 添加边框
            node.strokeWeight = 1;
            node.strokeAlign = 'INSIDE';
            node.strokes = [
                {
                    type: 'SOLID',
                    color: { r: 117 / 255, g: 117 / 255, b: 117 / 255 }, // #757575
                    opacity: 0.4
                }
            ];
            // 创建并添加噪点图像
            // 注意：这里使用的是一个示例base64字符串，你需要替换为实际的dry_point图像的base64数据
            const noiseImageData = "iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADESURBVHgB7ZdBCsIwEEXzxbpwIbgQvJLn8BQewbN4Ci/hEVwLLgRXIvnQDGSMbUJNOgXnw4CYxXt/GpIQGAwGg+GfKVF3OGfH5ll+FjnqHhXqAYrQAIXQBIXQCIXQDIXQcBZaYCFUCaAQqgRQCFUCKIQqARRClQAKoUoAhdAHVLiP+CIesIIjbPAZ8K6Ld7fwVcAedrDGZ8S7Lt7dwU8BNzhAA1t4wRnvunh3D38FXOEILezhhHddvHuCwWAwGAyGP+YNT4gKbYYsKWoAAAAASUVORK5CYII=";
            // 将base64字符串转换为Uint8Array
            const imageBytes = figma.base64Decode(noiseImageData);
            // 创建图像
            const noiseImage = figma.createImage(imageBytes);
            // 设置填充 - 三层，包括噪点图像
            node.fills = [
                {
                    type: 'SOLID',
                    color: { r: 243 / 255, g: 243 / 255, b: 243 / 255 }, // #F3F3F3
                    opacity: 0.9,
                    blendMode: 'LUMINOSITY'
                },
                {
                    type: 'SOLID',
                    color: { r: 243 / 255, g: 243 / 255, b: 243 / 255 }, // #F3F3F3
                    opacity: 0,
                    blendMode: 'COLOR'
                },
                {
                    type: 'IMAGE',
                    scaleMode: 'TILE',
                    imageHash: noiseImage.hash,
                    opacity: 0.02 // 2%透明度
                }
            ];
            // 设置背景模糊
            node.effects = [
                {
                    type: 'BACKGROUND_BLUR',
                    visible: true,
                    radius: 60
                }
            ];
            // 设置圆角和圆角平滑度
            if ('cornerRadius' in node) {
                node.cornerRadius = 7; // 设置圆角为7
            }
            // 设置圆角平滑度
            if ('cornerSmoothing' in node) {
                node.cornerSmoothing = 0.6; // 设置圆角平滑度为60%
            }
            // 设置阴影
            node.effects = [
                ...node.effects,
                {
                    type: 'DROP_SHADOW',
                    visible: true,
                    color: { r: 0, g: 0, b: 0, a: 0.15 },
                    offset: { x: 0, y: 2 },
                    radius: 21,
                    spread: 0,
                    blendMode: 'NORMAL'
                },
                {
                    type: 'DROP_SHADOW',
                    visible: true,
                    color: { r: 0, g: 0, b: 0, a: 0.19 },
                    offset: { x: 0, y: 32 },
                    radius: 64,
                    spread: 0,
                    blendMode: 'NORMAL'
                }
            ];
        }
        catch (error) {
            console.error('应用预设时出错:', error);
            // 添加类型检查
            if (error instanceof Error) {
                figma.notify('应用预设时出错: ' + error.message);
            }
            else {
                figma.notify('应用预设时出错');
            }
        }
    });
}
// Microsoft Mica 预设功能实现
function applyMsftMicaPreset() {
        const selection = figma.currentPage.selection;
    console.log('应用Mica预设，选中的图层数量:', selection.length);
    selection.forEach(node => {
        try {
            console.log('处理节点类型:', node.type);
            // 检查节点是否支持必要的属性
            if (!('fills' in node) || !('effects' in node)) {
                console.log('节点不支持必要的属性');
            return;
            }
            // 清除描边（如果之前有设置）
            node.strokes = [];
            // 设置填充 - 两层，使用更明显的对比色
            node.fills = [
                {
                    type: 'SOLID',
                    color: { r: 243 / 255, g: 243 / 255, b: 243 / 255 }, // 浅色+luminosity滤镜
                    blendMode: 'LUMINOSITY'
                },
                {
                    type: 'SOLID',
                    color: { r: 243 / 255, g: 243 / 255, b: 243 / 255 }, // 浅色+Color滤镜
                    blendMode: 'COLOR'
                }
            ];
            // 设置背景模糊，增加半径使效果更明显
            node.effects = [
                {
                    type: 'BACKGROUND_BLUR',
                    visible: true,
                    radius: 240
                },
                {
                    type: 'DROP_SHADOW',
                    visible: true,
                    color: { r: 0, g: 0, b: 0, a: 0.28 },
                    offset: { x: 0, y: 32 },
                    radius: 64,
                    spread: 0,
                    blendMode: 'NORMAL'
                },
                {
                    type: 'DROP_SHADOW',
                    visible: true,
                    color: { r: 0, g: 0, b: 0, a: 0.22 },
                    offset: { x: 0, y: 2 },
                    radius: 21,
                    spread: 0,
                    blendMode: 'NORMAL'
                }
            ];
            // 设置圆角和圆角平滑度
            if ('cornerRadius' in node) {
                node.cornerRadius = 8; // 设置圆角为8
            }
            // 设置圆角平滑度
            if ('cornerSmoothing' in node) {
                node.cornerSmoothing = 0.5; // 设置圆角平滑度为50%
            }
            console.log('成功应用Mica预设');
        }
        catch (error) {
            console.error('应用预设时出错:', error);
            // 添加类型检查
            if (error instanceof Error) {
                figma.notify('应用预设时出错: ' + error.message);
            }
            else {
                figma.notify('应用预设时出错');
            }
        }
    });
}
// Microsoft Aero 预设功能实现
function applyMsftAeroPreset() {
    const selection = figma.currentPage.selection;
    selection.forEach(node => {
        try {
            // 检查节点是否支持必要的属性
            if (!('fills' in node) || !('effects' in node) || !('strokes' in node)) {
                return;
            }
            // 设置径向渐变填充 - 右上角到左下角
            node.fills = [
                {
                    type: 'GRADIENT_RADIAL',
                    gradientTransform: [
                        [0.5, 1, -0.5],
                        [-1, 1, 0.5]
                    ],
                    gradientStops: [
                        { position: 0, color: { r: 0, g: 0, b: 0, a: 0.13 } },
                        { position: 1, color: { r: 0, g: 0, b: 0, a: 0.19 } }
                    ]
                }
            ];
            // 设置从上到下的渐变描边
            node.strokes = [
                {
                    type: 'GRADIENT_LINEAR',
                    gradientTransform: [
                        [0, 1, 0],
                        [1, 0, 0]
                    ],
                    gradientStops: [
                        { position: 0, color: { r: 1, g: 1, b: 1, a: 0.67 } },
                        { position: 0.96, color: { r: 1, g: 1, b: 1, a: 0.22 } },
                        { position: 1, color: { r: 1, g: 1, b: 1, a: 0.71 } }
                    ]
                }
            ];
            // 设置描边宽度和位置
            node.strokeWeight = 1.5;
            node.strokeAlign = 'INSIDE';
            // 设置背景模糊和投影
            node.effects = [
                {
                    type: 'DROP_SHADOW',
                    visible: true,
                    color: { r: 0, g: 0, b: 0, a: 0.4 },
                    offset: { x: 0, y: 0 },
                    radius: 13,
                    spread: 6,
                    blendMode: 'NORMAL'
                },
                {
                    type: 'BACKGROUND_BLUR',
                    visible: true,
                    radius: 12
                }
            ];
            // 设置圆角和圆角平滑度
            if ('cornerRadius' in node) {
                node.cornerRadius = 8; // 设置圆角为8
            }
            // 设置圆角平滑度
            if ('cornerSmoothing' in node) {
                node.cornerSmoothing = 0.5; // 设置圆角平滑度为50%
            }
        }
        catch (error) {
            console.error('应用预设时出错:', error);
            // 添加类型检查
            if (error instanceof Error) {
                figma.notify('应用预设时出错: ' + error.message);
            }
            else {
                figma.notify('应用预设时出错');
            }
        }
    });
}
// 处理来自UI的消息
figma.ui.onmessage = (msg) => {
    if (msg.type === 'simple-warning') {
        showNoSelectionWarning();
    }
    else if (msg.type === 'show-selection-warning') {
        figma.notify('请先选择一个图层');
    }
    else if (msg.type === 'check-layer-type') {
        // 检查图层类型并返回结果
        const validLayerType = isValidLayerType();
        if (!validLayerType) {
            figma.notify('Please select at least one 👉 Frame or layer 👈 first');
        }
        figma.ui.postMessage({
            type: 'layer-type-check-result',
            isValidLayerType: validLayerType
        });
    }
    else if (msg.type === 'style-selected') {
        // 用户选择了样式，但还没有应用
        console.log('用户选择了样式:', msg.buttonText);
        // 如果buttonText为null，说明用户取消了选择
        if (!msg.buttonText) {
            console.log('用户取消了样式选择');
            // 发送消息给UI，重置预览区域
            figma.ui.postMessage({
                type: 'reset-preview',
                message: 'Style deselected, resetting preview'
            });
        }
    }
    else if (msg.type === 'apply-effect') {
        // 应用效果前再次检查图层类型
        if (!isValidLayerType()) {
            figma.notify('Please select at least one 👉 Frame or layer 👈 first');
            return;
        }
        // 根据选中的样式应用相应的预设
        const style = msg.selectedStyle;
        const isDarkMode = msg.isDarkMode;
        console.log('应用效果，选中的样式:', style, '暗色模式:', isDarkMode);
        if (isDarkMode) {
            switch (style) {
                case 'Ultrathin':
                    applyiOSUltraThinDarkPreset();
                    break;
                case 'Thin':
                    applyiOSThinDarkPreset();
                    break;
                case 'Regular':
                    applyiOSRegularDarkPreset();
                    break;
                case 'Thick':
                    applyiOSThickDarkPreset();
                    break;
                case 'Chrome':
                    applyiOSChromeDarkPreset();
                    break;
                case 'visionOS':
                    // visionOS 效果在暗色模式下也使用相同的预设
                    applyVisionOSPreset();
                    break;
                case 'macOS':
                    applyMacOSDarkPreset();
                    break;
                case 'tvOS':
                    applyTvOSDarkPreset();
                    break;
                // 其他暗色模式预设...
            }
        }
        else {
            switch (style) {
                case 'Ultrathin':
                    applyiOSUltraThinPreset();
                    break;
                case 'Thin':
                    applyiOSThinPreset();
                    break;
                case 'Regular':
                    applyiOSRegularPreset();
                    break;
                case 'Thick':
                    applyiOSThickPreset();
                    break;
                case 'Chrome':
                    applyiOSChromePreset();
                    break;
                case 'visionOS':
                    applyVisionOSPreset();
                    break;
                case 'tvOS':
                    applyTvOSPreset();
                    break;
                case 'macOS':
                    applyMacOSPreset();
                    break;
                case 'AcrylicThin':
                    applyMsftAcrylicThinPreset();
                    break;
                case 'AcrylicBase':
                    applyMsftAcrylicBasePreset();
                    break;
                case 'Mica':
                case 'MICA':
                    console.log('调用applyMsftMicaPreset函数');
                    applyMsftMicaPreset();
                    break;
                case 'Aero':
                    applyMsftAeroPreset();
                    break;
                // 其他亮色模式预设...
            }
        }
    }
    else if (msg.type === 'notification') {
        // 显示来自UI的通知
        figma.notify(msg.message);
    }
    else if (msg.type === 'easter-egg') {
        // 处理彩蛋消息
        showEasterEgg(msg.code);
    }
};
