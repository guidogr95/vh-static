// Assets
import Cores from 'public/assets/media/icons/cpu.svg'
import RAM from 'public/assets/media/icons/ram.svg'
import Storage from 'public/assets/media/icons/server.svg'
import gpu from 'public/assets/media/icons/gpu.svg'
import disk from 'public/assets/media/icons/hard-drive.svg'
import CloudServersIcon from 'public/assets/media/icons/cloudservers.png'
import CloudNetworksIcon from 'public/assets/media/icons/cloudnetworks.png'
import CloudObjectStorageIcon from 'public/assets/media/icons/cloudobjectstorage.png'
import CloudBlockStorageIcon from 'public/assets/media/icons/blockstorage.png'
import CloudFileSharingIcon from 'public/assets/media/icons/cloudfilesharing.png'
import CloudImageServiceIcon from 'public/assets/media/icons/cloudimageservice.png'
import CloudLoadBalancerIcon from 'public/assets/media/icons/cloudloadbalancers.png'

export const publicPricing = {
  CloudServers: {
    icon: CloudServersIcon,
    label: 'Cloud Servers',
    sectionPricingData: {
      StandardV3: {
        label: 'Standard V3',
        type: 'baseMultiplier',
        pricingTable: [
          {
            label: '',
            pricingData: [
              {
                baseMultiplier: 1,
                usdHourlyRate: 0.055
              },
              {
                baseMultiplier: 2,
                usdHourlyRate: 0.110
              },
              {
                baseMultiplier: 4,
                usdHourlyRate: 0.219
              },
              {
                baseMultiplier: 8,
                usdHourlyRate: 0.438
              },
              {
                baseMultiplier: 16,
                usdHourlyRate: 0.876
              },
              {
                baseMultiplier: 24,
                usdHourlyRate: 1.752
              },
              {
                baseMultiplier: 32,
                usdHourlyRate: 3.504
              },
              {
                baseMultiplier: 48,
                usdHourlyRate: 7.008
              }
            ]
          }
        ],
        legendData: {
          features: [
            {
              icon: Cores,
              label: '2 Cores'
            },
            {
              icon: RAM,
              label: '8GB RAM'
            },
            {
              icon: Storage,
              label: '40GB Storage'
            }
          ]
        }
      },
      StandardV2: {
        label: 'Standard V2',
        type: 'baseMultiplier',
        pricingTable: [
          {
            label: 'Intel x86',
            pricingData: [
              {
                baseMultiplier: 1,
                usdHourlyRate: 0.045
              },
              {
                baseMultiplier: 2,
                usdHourlyRate: 0.09
              },
              {
                baseMultiplier: 4,
                usdHourlyRate: 0.18
              },
              {
                baseMultiplier: 8,
                usdHourlyRate: 0.36
              },
              {
                baseMultiplier: 16,
                usdHourlyRate: 0.72
              }
            ]
          },
          {
            label: 'Arm 64-bit',
            pricingData: [
              {
                baseMultiplier: 1,
                usdHourlyRate: 0.03825
              },
              {
                baseMultiplier: 2,
                usdHourlyRate: 0.0765
              },
              {
                baseMultiplier: 4,
                usdHourlyRate: 0.153
              },
              {
                baseMultiplier: 8,
                usdHourlyRate: 0.306
              },
              {
                baseMultiplier: 16,
                usdHourlyRate: 0.612
              }
            ]
          }
        ],
        legendData: {
          features: [
            {
              icon: Cores,
              label: '1 Cores'
            },
            {
              icon: RAM,
              label: '4GB RAM'
            }
          ]
        }
      },
      HighCPUV2: {
        label: 'High CPU V2',
        type: 'baseMultiplier',
        pricingTable: [
          {
            label: 'Intel x86',
            pricingData: [
              {
                baseMultiplier: 1,
                usdHourlyRate: 0.035
              },
              {
                baseMultiplier: 2,
                usdHourlyRate: 0.07
              },
              {
                baseMultiplier: 4,
                usdHourlyRate: 0.14
              },
              {
                baseMultiplier: 8,
                usdHourlyRate: 0.28
              },
              {
                baseMultiplier: 16,
                usdHourlyRate: 0.56
              },
              {
                baseMultiplier: 32,
                usdHourlyRate: 1.12
              },
              {
                baseMultiplier: 64,
                usdHourlyRate: 2.24
              }
            ]
          },
          {
            label: 'Arm 64-bit',
            pricingData: [
              {
                baseMultiplier: 1,
                usdHourlyRate: 0.02975
              },
              {
                baseMultiplier: 2,
                usdHourlyRate: 0.0595
              },
              {
                baseMultiplier: 4,
                usdHourlyRate: 0.119
              },
              {
                baseMultiplier: 8,
                usdHourlyRate: 0.238
              },
              {
                baseMultiplier: 16,
                usdHourlyRate: 0.476
              },
              {
                baseMultiplier: 32,
                usdHourlyRate: 0.952
              },
              {
                baseMultiplier: 64,
                usdHourlyRate: 1.904
              }
            ]
          }
        ],
        legendData: {
          features: [
            {
              icon: Cores,
              label: '1 Cores'
            },
            {
              icon: RAM,
              label: '1GB RAM'
            }
          ]
        }
      },
      GPU: {
        label: 'GPU',
        type: 'baseMultiplier',
        pricingTable: [
          {
            label: '',
            pricingData: [
              {
                baseMultiplier: 1,
                usdHourlyRate: 0.80
              },
              {
                baseMultiplier: 2,
                usdHourlyRate: 1.60
              },
              {
                baseMultiplier: 4,
                usdHourlyRate: 3.20
              },
              {
                baseMultiplier: 8,
                usdHourlyRate: 6.40
              }
            ]
          }
        ],
        legendData: {
          features: [
            {
              icon: gpu,
              label: 'K80'
            },
            {
              icon: Cores,
              label: '6 Cores'
            },
            {
              icon: RAM,
              label: '60GB RAM'
            },
            {
              icon: disk,
              label: '255GB'
            }
          ]
        }
      },
      DataTransfer: {
        label: 'Data Transfer',
        type: 'ratePricing',
        pricingTable: [
          {
            label: 'Public Network',
            pricingData: {
              unit: 'GB',
              usdRate: 0.10,
              min: 1
            }
          },
          {
            label: 'Private Network',
            pricingData: {
              unit: 'GB',
              usdRate: 0
            }
          }
        ]
      },
      IPAddresses: {
        label: 'IP Addresses',
        type: 'ratePricing',
        pricingTable: [
          {
            label: 'Public IP Address',
            pricingData: {
              unit: 'IP Address',
              usdRate: 2.0832
            }
          }
        ]
      },
      SoftwareLicenses: {
        label: 'Software Licenses',
        type: 'ratePricing',
        multiple: true,
        placeholder: 'Select Software License',
        pricingTable: [
          {
            label: 'Windows Server 2008 Standard R2',
            pricingData: {
              unit: 'Licenses',
              usdRate: 22.32,
              min: 1
            }
          },
          {
            label: 'Windows Server 2012 Standard R2',
            pricingData: {
              unit: 'Licenses',
              usdRate: 22.32,
              min: 1
            }
          },
          {
            label: 'cPanel & WebHostManager (WHM)',
            pricingData: {
              unit: 'Licenses',
              usdRate: 14.88,
              min: 1
            }
          }
        ]
      }
    }
  },
  CloudNetworks: {
    icon: CloudNetworksIcon,
    label: 'Cloud Networks',
    sectionPricingData: {
      NetworkUsage: {
        label: 'Network Usage',
        type: 'ratePricing',
        multiple: true,
        placeholder: 'Select Cloud Network',
        pricingTable: [
          {
            label: 'Single-Tenant Private Network',
            pricingData: {
              unit: '',
              usdRate: 1.0416,
              min: 1
            }
          },
          {
            label: 'Router',
            pricingData: {
              unit: '',
              usdRate: 1.0416,
              min: 1
            }
          },
          {
            label: 'Floating IP',
            pricingData: {
              unit: '',
              usdRate: 2.0832,
              min: 1
            }
          }
        ]
      }
    }
  },
  CloudObjectStorage: {
    icon: CloudObjectStorageIcon,
    label: 'Cloud Object Storage',
    sectionPricingData: {
      Storage: {
        label: 'Storage',
        type: 'ratePricing',
        pricingTable: [
          {
            label: 'Storage',
            pricingData: {
              unit: 'GB',
              usdRate: 1.0416,
              min: 1,
              conditions: [
                {
                  maxValue: 1000,
                  usdRate: 0.10416
                },
                {
                  maxValue: 50000,
                  usdRate: 0.09672
                },
                {
                  maxValue: 100000,
                  usdRate: 0.08184
                }
              ]
            }
          }
        ]
      },
      Bandwidth: {
        label: 'Bandwidth',
        type: 'ratePricing',
        pricingTable: [
          {
            label: 'Public Network',
            pricingData: {
              unit: 'GB',
              usdRate: 0.10416,
              min: 1
            }
          }
        ]
      }
    }
  },
  CloudBlockStorage: {
    icon: CloudBlockStorageIcon,
    label: 'Cloud Block Storage',
    sectionPricingData: {
      DiskType: {
        label: 'Disk Type',
        type: 'ratePricing',
        pricingTable: [
          {
            label: 'HDD',
            pricingData: {
              unit: 'GB',
              usdRate: 0.01488,
              min: 1
            }
          },
          {
            label: 'SSD',
            pricingData: {
              unit: 'GB',
              usdRate: 0.15624,
              min: 1
            }
          }
        ]
      },
      ImageStoring: {
        label: 'Image Storing',
        type: 'ratePricing',
        pricingTable: [
          {
            label: 'Snapshots on HDD',
            pricingData: {
              unit: 'GB',
              usdRate: 0.01488,
              min: 1
            }
          },
          {
            label: 'Snapshots on SSD',
            pricingData: {
              unit: 'GB',
              usdRate: 0.15624,
              min: 1
            }
          }
        ]
      }
    }
  },
  CloudFileSharing: {
    icon: CloudFileSharingIcon,
    label: 'Cloud File Sharing',
    sectionPricingData: {
      FileSharingSystem: {
        label: 'File Sharing System',
        type: 'ratePricing',
        pricingTable: [
          {
            label: 'File Storage',
            pricingData: {
              unit: 'GB',
              usdRate: 0.1192,
              min: 1
            }
          }
        ]
      }
    }
  },
  CloudImageService: {
    icon: CloudImageServiceIcon,
    label: 'Cloud Image Service',
    sectionPricingData: {
      ImageStoring: {
        label: 'Image Storing',
        type: 'ratePricing',
        pricingTable: [
          {
            label: 'Image Storing',
            pricingData: {
              unit: 'GB',
              usdRate: 0.10416,
              min: 1
            }
          }
        ]
      }
    }
  },
  CloudLoadBalancers: {
    icon: CloudLoadBalancerIcon,
    label: 'Cloud Load Balancer',
    sectionPricingData: {
      Bandwidth: {
        label: 'Bandwidth',
        type: 'ratePricing',
        pricingTable: [
          {
            label: 'Bandwidth',
            pricingData: {
              unit: 'GB',
              usdRate: 0.10416,
              min: 1,
              conditions: [
                {
                  maxValue: 1000,
                  usdRate: 0.10416
                },
                {
                  maxValue: 50000,
                  usdRate: 0.09672
                },
                {
                  maxValue: 100000,
                  usdRate: 0.08184
                }
              ]
            }
          }
        ]
      },
      Type: {
        label: 'Type',
        type: 'ratePricing',
        pricingTable: [
          {
            label: 'Highly Available Load Balancer + SSL',
            pricingData: {
              unit: 'Highly Available Load Balancer + SSL',
              usdRate: 22.32
            }
          }
        ]
      }
    }
  }
}