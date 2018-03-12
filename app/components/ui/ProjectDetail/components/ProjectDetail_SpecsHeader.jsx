import React from 'react'
import AppButton from '../../AppButton/AppButton.jsx'


const ProjectDetail_SpecsHeader = props => {

	return (
		<div className={`detail-specs-header ${props.showingSpecs}`}>
			<div className="detail-specs-header-inner">
				<div className={`detail-header-specs ${props.showingSpecs}`}>
					<div className="detail-spec-header-item">
						<p className="detail-header-item-name">Client</p>
						<p className="detail-header-item-value">The Gary Group</p>
					</div>

					<div className="detail-spec-header-item">
						<p className="detail-header-item-name">Role</p>
						<p className="detail-header-item-value">Concept, Design, Development</p>
					</div>

					<div className="detail-spec-header-item detail-button">
                        <AppButton buttonText="Open Project" buttonPath={`${props.path}/${props.anchor}`} />
					</div>
				</div>
			</div>
		</div>
	)
}


export default ProjectDetail_SpecsHeader