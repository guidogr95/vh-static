// Assets
import Cores from 'public/assets/media/icons/cpu.svg'
import RAM from 'public/assets/media/icons/ram.svg'
import Storage from 'public/assets/media/icons/server.svg'
import gpu from 'public/assets/media/icons/gpu.svg'
import disk from 'public/assets/media/icons/hard-drive.svg'
import CloudServersIcon from 'public/assets/media/icons/cloudservers.svg'
import CloudNetworksIcon from 'public/assets/media/icons/cloudnetworks.svg'
import CloudObjectStorageIcon from 'public/assets/media/icons/cloudobjectstorage.svg'
import CloudBlockStorageIcon from 'public/assets/media/icons/cloudblockstorage.svg'
import CloudFileSharingIcon from 'public/assets/media/icons/cloudfilesharing.svg'
import CloudImageServiceIcon from 'public/assets/media/icons/cloudimageservice.svg'
import CloudLoadBalancerIcon from 'public/assets/media/icons/cloudloadbalancers.svg'

export const publicPricing = {
  CloudServers: {
    icon: CloudServersIcon,
    label: 'Cloud Servers',
    id: '41f1595a',
    sectionPricingData: {
      StandardV3: {
        label: 'Standard V3',
        id: '8816ecb0',
        addToSummary: true,
        isMultiple: true,
        type: 'baseMultiplier',
        pricingTable: [
          {
            label: '',
            id: 'fde59d88',
            pricingData: [
              {
                baseMultiplier: 0,
                usdRate: 0,
                usdRateTime: 'hourly'
              },
              {
                baseMultiplier: 1,
                usdRate: 0.055,
                usdRateTime: 'hourly'
              },
              {
                baseMultiplier: 2,
                usdRate: 0.110,
                usdRateTime: 'hourly'
              },
              {
                baseMultiplier: 4,
                usdRate: 0.219,
                usdRateTime: 'hourly'
              },
              {
                baseMultiplier: 8,
                usdRate: 0.438,
                usdRateTime: 'hourly'
              },
              {
                baseMultiplier: 16,
                usdRate: 0.876,
                usdRateTime: 'hourly'
              },
              {
                baseMultiplier: 24,
                usdRate: 1.752,
                usdRateTime: 'hourly'
              },
              {
                baseMultiplier: 32,
                usdRate: 3.504,
                usdRateTime: 'hourly'
              },
              {
                baseMultiplier: 48,
                usdRate: 7.008,
                usdRateTime: 'hourly'
              }
            ]
          }
        ],
        legendData: {
          features: [
            {
              icon: Cores,
              label: 'Cores',
              base: 2,
              unit: '',
              summaryProduct: 'processor',
              type: 'Cores'
            },
            {
              icon: RAM,
              label: 'RAM',
              unit: 'GB',
              base: 8,
              summaryProduct: 'memory',
              type: 'RAM'
            },
            {
              icon: Storage,
              label: 'Storage',
              unit: 'GB',
              base: 40,
              summaryProduct: 'storage',
              type: 'HDD'
            }
          ]
        }
      },
      StandardV2: {
        label: 'Standard V2',
        id: '9445ccea',
        addToSummary: true,
        isMultiple: true,
        type: 'baseMultiplier',
        pricingTable: [
          {
            label: 'Intel x86',
            id: '088bcac8',
            pricingData: [
              {
                baseMultiplier: 0,
                usdRate: 0,
                usdRateTime: 'hourly'
              },
              {
                baseMultiplier: 1,
                usdRate: 0.045,
                usdRateTime: 'hourly'
              },
              {
                baseMultiplier: 2,
                usdRate: 0.09,
                usdRateTime: 'hourly'
              },
              {
                baseMultiplier: 4,
                usdRate: 0.18,
                usdRateTime: 'hourly'
              },
              {
                baseMultiplier: 8,
                usdRate: 0.36,
                usdRateTime: 'hourly'
              },
              {
                baseMultiplier: 16,
                usdRate: 0.72,
                usdRateTime: 'hourly'
              }
            ]
          },
          {
            label: 'Arm 64-bit',
            id: '0e3a7b90',
            pricingData: [
              {
                baseMultiplier: 0,
                usdRate: 0,
                usdRateTime: 'hourly'
              },
              {
                baseMultiplier: 1,
                usdRate: 0.03825,
                usdRateTime: 'hourly'
              },
              {
                baseMultiplier: 2,
                usdRate: 0.0765,
                usdRateTime: 'hourly'
              },
              {
                baseMultiplier: 4,
                usdRate: 0.153,
                usdRateTime: 'hourly'
              },
              {
                baseMultiplier: 8,
                usdRate: 0.306,
                usdRateTime: 'hourly'
              },
              {
                baseMultiplier: 16,
                usdRate: 0.612,
                usdRateTime: 'hourly'
              }
            ]
          }
        ],
        legendData: {
          features: [
            {
              icon: Cores,
              label: 'Cores',
              unit: '',
              base: 1,
              summaryProduct: 'processor',
              type: 'Cores'
            },
            {
              icon: RAM,
              label: 'RAM',
              unit: 'GB',
              base: 4,
              summaryProduct: 'memory',
              type: 'RAM'
            }
          ]
        }
      },
      HighCPUV2: {
        label: 'High CPU V2',
        type: 'baseMultiplier',
        addToSummary: true,
        id: 'a27796d6',
        pricingTable: [
          {
            label: 'Intel x86',
            id: 'edc9ff84',
            pricingData: [
              {
                baseMultiplier: 0,
                usdRate: 0,
                usdRateTime: 'hourly'
              },
              {
                baseMultiplier: 1,
                usdRate: 0.035,
                usdRateTime: 'hourly'
              },
              {
                baseMultiplier: 2,
                usdRate: 0.07,
                usdRateTime: 'hourly'
              },
              {
                baseMultiplier: 4,
                usdRate: 0.14,
                usdRateTime: 'hourly'
              },
              {
                baseMultiplier: 8,
                usdRate: 0.28,
                usdRateTime: 'hourly'
              },
              {
                baseMultiplier: 16,
                usdRate: 0.56,
                usdRateTime: 'hourly'
              },
              {
                baseMultiplier: 32,
                usdRate: 1.12,
                usdRateTime: 'hourly'
              },
              {
                baseMultiplier: 64,
                usdRate: 2.24,
                usdRateTime: 'hourly'
              }
            ]
          },
          {
            label: 'Arm 64-bit',
            id: '18be2d00',
            pricingData: [
              {
                baseMultiplier: 0,
                usdRate: 0,
                usdRateTime: 'hourly'
              },
              {
                baseMultiplier: 1,
                usdRate: 0.02975,
                usdRateTime: 'hourly'
              },
              {
                baseMultiplier: 2,
                usdRate: 0.0595,
                usdRateTime: 'hourly'
              },
              {
                baseMultiplier: 4,
                usdRate: 0.119,
                usdRateTime: 'hourly'
              },
              {
                baseMultiplier: 8,
                usdRate: 0.238,
                usdRateTime: 'hourly'
              },
              {
                baseMultiplier: 16,
                usdRate: 0.476,
                usdRateTime: 'hourly'
              },
              {
                baseMultiplier: 32,
                usdRate: 0.952,
                usdRateTime: 'hourly'
              },
              {
                baseMultiplier: 64,
                usdRate: 1.904,
                usdRateTime: 'hourly'
              }
            ]
          }
        ],
        legendData: {
          features: [
            {
              icon: Cores,
              label: 'Cores',
              unit: '',
              base: 1,
              summaryProduct: 'processor',
              type: 'Cores'
            },
            {
              icon: RAM,
              label: 'RAM',
              unit: 'GB',
              base: 1,
              summaryProduct: 'memory',
              type: 'RAM'
            }
          ]
        }
      },
      GPU: {
        label: 'GPU',
        type: 'baseMultiplier',
        addToSummary: true,
        id: 'a8adc390',
        pricingTable: [
          {
            label: '',
            id: 'def40464',
            pricingData: [
              {
                baseMultiplier: 0,
                usdRate: 0,
                usdRateTime: 'hourly'
              },
              {
                baseMultiplier: 1,
                usdRate: 0.80,
                usdRateTime: 'hourly'
              },
              {
                baseMultiplier: 2,
                usdRate: 1.60,
                usdRateTime: 'hourly'
              },
              {
                baseMultiplier: 4,
                usdRate: 3.20,
                usdRateTime: 'hourly'
              },
              {
                baseMultiplier: 8,
                usdRate: 6.40,
                usdRateTime: 'hourly'
              }
            ]
          }
        ],
        legendData: {
          features: [
            {
              icon: gpu,
              label: 'K80',
              unit: '',
              base: 1,
              summaryProduct: 'processor',
              type: 'GPU'
            },
            {
              icon: Cores,
              label: 'Cores',
              unit: '',
              base: 6,
              summaryProduct: 'processor',
              type: 'Cores'
            },
            {
              icon: RAM,
              label: 'RAM',
              unit: 'GB',
              base: 60,
              summaryProduct: 'memory',
              type: 'RAM'
            },
            {
              icon: disk,
              label: '',
              unit: 'GB',
              base: 255,
              summaryProduct: 'storage',
              type: 'HDD'
            }
          ]
        }
      },
      DataTransfer: {
        label: 'Data Transfer',
        type: 'ratePricing',
        id: 'b17210ee',
        description: 'Each instance is connected to both a public (internet) network and an internal network. You can take advantage of gigabit-speed between your instances on the private network at no cost.',
        pricingTable: [
          {
            label: 'Public Network',
            id: 'ca4615b6',
            pricingData: {
              unit: 'GB',
              usdRate: 0.10,
              usdRateTime: 'monthly',
              min: 1
            }
          },
          {
            label: 'Private Network',
            id: 'd22ae8a6',
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
        id: 'b8baa104',
        description: 'Each instance is allocated one public IP for networking at no additional cost. You can increase the number of IPs assigned to your instance from your control panel. The IP addresses are billed per hour.',
        pricingTable: [
          {
            label: 'Public IP Address',
            id: '29ccf9fa',
            pricingData: {
              unit: 'IP Address',
              usdRate: 2.0832,
              usdRateTime: 'monthly'
            }
          }
        ]
      },
      SoftwareLicenses: {
        label: 'Software Licenses',
        type: 'ratePricing',
        id: 'be93d686',
        description: 'We have worked with our partners to offer leased software licenses for our cloud computing platform. These licenses are available for use exclusively on our cloud computing platform and don???t work for external use.',
        isMultiple: true,
        placeholderLabel: 'Software License',
        pricingTable: [
          {
            label: 'Windows Server 2008 Standard R2',
            id: '3479b992',
            pricingData: {
              unit: 'Licenses',
              usdRate: 22.32,
              usdRateTime: 'monthly',
              min: 1
            }
          },
          {
            label: 'Windows Server 2012 Standard R2',
            id: '3ab3d7fc',
            pricingData: {
              unit: 'Licenses',
              usdRate: 22.32,
              usdRateTime: 'monthly',
              min: 1
            }
          },
          {
            label: 'cPanel & WebHostManager (WHM)',
            id: '400f3246',
            pricingData: {
              unit: 'Licenses',
              usdRate: 14.88,
              usdRateTime: 'monthly',
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
    id: '29a50b12',
    sectionPricingData: {
      NetworkUsage: {
        label: 'Network Usage',
        id: '4f415c12',
        type: 'ratePricing',
        isMultiple: true,
        placeholderLabel: 'Cloud Network',
        pricingTable: [
          {
            label: 'Single-Tenant Private Network',
            id: '56339882',
            pricingData: {
              unit: '',
              usdRate: 1.0416,
              usdRateTime: 'monthly',
              min: 1
            }
          },
          {
            label: 'Router',
            id: '61389b1a',
            pricingData: {
              unit: '',
              usdRate: 1.0416,
              usdRateTime: 'monthly',
              min: 1
            }
          },
          {
            label: 'Floating IP',
            id: '6f1a76f4',
            pricingData: {
              unit: '',
              usdRate: 2.0832,
              usdRateTime: 'monthly',
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
    id: '5572a9f2',
    sectionPricingData: {
      Storage: {
        label: 'Storage',
        id: '7f7a8b4c',
        addToSummary: true,
        summaryProduct: 'storage',
        type: 'ratePricing',
        pricingTable: [
          {
            label: 'Storage',
            id: '8a5da148',
            type: 'HDD',
            pricingData: {
              unit: 'GB',
              usdRate: 1.0416,
              usdRateTime: 'monthly',
              min: 1,
              conditions: [
                {
                  maxValue: 1000,
                  usdRate: 0.10416,
                  usdRateTime: 'monthly'
                },
                {
                  maxValue: 50000,
                  usdRate: 0.09672,
                  usdRateTime: 'monthly'
                },
                {
                  maxValue: 100000,
                  usdRate: 0.08184,
                  usdRateTime: 'monthly'
                }
              ]
            }
          }
        ]
      },
      Bandwidth: {
        label: 'Bandwidth',
        id: '97af50ee',
        type: 'ratePricing',
        pricingTable: [
          {
            label: 'Public Network',
            id: '9ccc9f46',
            pricingData: {
              unit: 'GB',
              usdRate: 0.10416,
              usdRateTime: 'monthly',
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
    id: '5dba7586',
    sectionPricingData: {
      DiskType: {
        label: 'Disk Type',
        id: 'a8bf7d64',
        addToSummary: true,
        summaryProduct: 'storage',
        type: 'ratePricing',
        pricingTable: [
          {
            label: 'HDD',
            type: 'HDD',
            id: 'af69d524',
            pricingData: {
              unit: 'GB',
              usdRate: 0.01488,
              usdRateTime: 'monthly',
              min: 1
            }
          },
          {
            label: 'SSD',
            type: 'SSD',
            id: 'b409ca94',
            pricingData: {
              unit: 'GB',
              usdRate: 0.15624,
              usdRateTime: 'monthly',
              min: 1
            }
          }
        ]
      },
      ImageStoring: {
        label: 'Image Storing',
        id: 'bad23b40',
        addToSummary: true,
        summaryProduct: 'storage',
        type: 'ratePricing',
        pricingTable: [
          {
            label: 'Snapshots on HDD',
            type: 'HDD',
            id: 'bfdcdffa',
            pricingData: {
              unit: 'GB',
              usdRate: 0.01488,
              usdRateTime: 'monthly',
              min: 1
            }
          },
          {
            label: 'Snapshots on SSD',
            type: 'SSD',
            id: 'c5613ec6',
            pricingData: {
              unit: 'GB',
              usdRate: 0.15624,
              usdRateTime: 'monthly',
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
    id: '68396274',
    sectionPricingData: {
      FileSharingSystem: {
        label: 'File Sharing System',
        id: 'ceb42bfa',
        type: 'ratePricing',
        description: 'Deploy your file-sharing system today without any commitment. Pay for the storage you use plus a $20/mo base charge per share.',
        pricingTable: [
          {
            label: 'File Storage',
            id: 'd3870a6c',
            pricingData: {
              unit: 'GB',
              usdRate: 0.1192,
              usdRateTime: 'monthly',
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
    id: '6e334ffa',
    sectionPricingData: {
      ImageStoring: {
        label: 'Image Storing',
        id: 'db5a61d0',
        type: 'ratePricing',
        addToSummary: true,
        summaryProduct: 'storage',
        description: 'You can take point-in-time snapshots on your instance and restore them at any time. We only charge the duration that the snapshots are stored. The snapshots are billed per hour and compressed to reduce usage fees.',
        pricingTable: [
          {
            label: 'Image Storing',
            id: 'dfe7c62a',
            type: 'HDD',
            pricingData: {
              unit: 'GB',
              usdRate: 0.10416,
              usdRateTime: 'monthly',
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
    id: '79770186',
    sectionPricingData: {
      Bandwidth: {
        label: 'Bandwidth',
        id: 'e7169b88',
        type: 'ratePricing',
        description: 'Bandwidth charges are billed on an hourly basis and are sectioned by tier to offer you lower prices for higher usage.',
        pricingTable: [
          {
            label: 'Bandwidth',
            id: 'ec5669e8',
            pricingData: {
              unit: 'GB',
              usdRate: 0.10416,
              usdRateTime: 'monthly',
              min: 1,
              conditions: [
                {
                  maxValue: 1000,
                  usdRate: 0.10416,
                  usdRateTime: 'monthly'
                },
                {
                  maxValue: 50000,
                  usdRate: 0.09672,
                  usdRateTime: 'monthly'
                },
                {
                  maxValue: 100000,
                  usdRate: 0.08184,
                  usdRateTime: 'monthly'
                }
              ]
            }
          }
        ]
      },
      Type: {
        label: 'Type',
        id: 'f8007144',
        type: 'ratePricing',
        description: 'Cloud Load Balancers allow you to pay for traffic management on an hourly basis with no long-term commitments.',
        pricingTable: [
          {
            label: 'Highly Available Load Balancer + SSL',
            id: 'fe9f3df0',
            pricingData: {
              unit: 'Highly Available Load Balancer + SSL',
              usdRate: 22.32,
              usdRateTime: 'monthly',
              min: 1
            }
          }
        ]
      }
    }
  }
}