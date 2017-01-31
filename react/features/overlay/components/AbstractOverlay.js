/* global $, APP */
import React, { Component } from 'react';

/**
 * Implements an abstract React Component for overlay - the components which
 * are displayed on top of the application covering the whole screen.
 */
export default class AbstractOverlay extends Component {
    /**
     * Initializes a new AbstractOverlay instance.
     *
     * @param {Object} props - The read-only properties with which the new
     * instance is to be initialized.
     * @public
     */
    constructor(props) {
        super(props);

        this.state = {
            /**
             * Indicates the css style of the overlay. if true - lighter  and
             * darker otherwise.
             * @type {boolean}
             */
            isLightOverlay: false
        };
    }

    /**
     * Abstract method which should be used by subclasses to provide the overlay
     * content.
     *
     * @returns {ReactElement|null}
     * @protected
     */
    _renderOverlayContent() {
        return null;
    }

    /**
     * This method is executed when comonent is mounted.
     *
     * @inheritdoc
     * @returns {void}
     */
    componentDidMount() {
        // XXX Temporary solution until we add React translation.
        APP.translation.translateElement($('#overlay'));
    }

    /**
     * Implements React's {@link Component#render()}.
     *
     * @inheritdoc
     * @returns {ReactElement|null}
     */
    render() {
        const containerClass = this.state.isLightOverlay
            ? 'overlay__container-light' : 'overlay__container';

        return (
            <div
                className = { containerClass }
                id = 'overlay'>
                <div className = 'overlay__content'>
                    { this._renderOverlayContent() }
                </div>
            </div>
        );
    }
}
