import React from 'react'
import AppButton from '../../AppButton/AppButton.jsx'


const ProjectDetail_SpecsHeader = props => {

	return (
		<div className={`detail-specs-header ${props.showingSpecs}`}>
			<div className="detail-specs-header-inner">
				<div className={`detail-header-specs ${props.showingSpecs}`}>
					<div className="detail-spec-header-item">
						<div className="detail-header-item-name">Client</div>
						<div className="detail-header-item-value">The Gary Group</div>
					</div>

					<div className="detail-spec-header-item">
						<div className="detail-header-item-name">Role</div>
						<div className="detail-header-item-value">Concept, Design, Development</div>
					</div>

					<div className="detail-spec-header-item">
                        <AppButton buttonText="Open Project" buttonPath={`${props.path}/${props.anchor}`} />
					</div>
				</div>
			</div>
		</div>
	)
}


export default ProjectDetail_SpecsHeader