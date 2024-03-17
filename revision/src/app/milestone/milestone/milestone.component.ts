import { Component } from '@angular/core';

@Component({
  selector: 'app-milestone',
  templateUrl: './milestone.component.html',
  styleUrls: ['./milestone.component.css']
})
export class MilestoneComponent {
  initialMilestones: any[] = []
  hasPropertiesChanged = false
  milestones = JSON.parse(JSON.stringify(this.initialMilestones))
  addedMilestones = new Set()
  removedMilestones = new Set()
  milestonesStatusChanged = new Set()
  createMilestone() {
    return {
      id: Math.random(),
      name: "Milestone3" + Math.random(),
      isActive: true,
      defaultAssignee: 'Nadim' + Math.random()
    };
  }
  addMilestone = (milestone: any) => {
    this.milestones.push(milestone)
    if (this.removedMilestones.has(milestone)) {
      this.removedMilestones.delete(milestone)
      this.hasPropertiesChanged = this.addedMilestones.size > 0 || this.removedMilestones.size > 0 || this.milestonesStatusChanged.size > 0
      return
    }
    this.addedMilestones.add(milestone)
    this.hasPropertiesChanged = true
  }
  removeMilestone = (milestone: any) => {
    this.milestones.splice(this.milestones.indexOf(milestone), 1)
    if (this.addedMilestones.has(milestone)) {
      this.addedMilestones.delete(milestone)
      this.milestonesStatusChanged.delete(milestone)
      this.hasPropertiesChanged = this.addedMilestones.size > 0 || this.removedMilestones.size > 0 || this.milestonesStatusChanged.size > 0
      return
    }
    this.removedMilestones.add(milestone)
    this.hasPropertiesChanged = true
  }
  toggleIsActive = (milestone: any, isActive: any) => {
    const initialMilestone = this.initialMilestones.find(m => m.id === milestone.id);
    if (!initialMilestone) {
      milestone.isActive = isActive;
      this.milestonesStatusChanged.add(milestone);
      return;
    }
    milestone.isActive = isActive;
    if (initialMilestone.isActive !== milestone.isActive) {
      this.milestonesStatusChanged.add(milestone);
      this.hasPropertiesChanged = true;
    } else {
      this.milestonesStatusChanged.delete(milestone);
      this.hasPropertiesChanged = this.addedMilestones.size > 0 || this.removedMilestones.size > 0 || this.milestonesStatusChanged.size > 0
    }
  };
  save() {
  }
}
